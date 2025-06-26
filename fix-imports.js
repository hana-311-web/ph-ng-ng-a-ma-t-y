const fs = require("fs");
const path = require("path");

// Function to recursively get all .tsx and .ts files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

// Get all files in src directory
const allFiles = getAllFiles("./src");

// Fix imports for each file
allFiles.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace @/lib/utils with appropriate relative path
    if (content.includes("@/lib/utils")) {
      // Calculate relative path from current file to src/lib/utils
      const relativePath = path
        .relative(path.dirname(filePath), "./src/lib/utils")
        .replace(/\\/g, "/");
      const newImportPath = relativePath.startsWith(".")
        ? relativePath
        : "./" + relativePath;

      content = content.replace(
        /from ["']@\/lib\/utils["']/g,
        `from "${newImportPath}"`,
      );

      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
    }

    // Fix other common @/ imports
    if (content.includes("@/components/")) {
      const componentsPath = path
        .relative(path.dirname(filePath), "./src/components")
        .replace(/\\/g, "/");
      const newComponentsPath = componentsPath.startsWith(".")
        ? componentsPath
        : "./" + componentsPath;

      content = content.replace(
        /from ["']@\/components\//g,
        `from "${newComponentsPath}/`,
      );
      fs.writeFileSync(filePath, content, "utf8");
    }

    if (content.includes("@/hooks/")) {
      const hooksPath = path
        .relative(path.dirname(filePath), "./src/hooks")
        .replace(/\\/g, "/");
      const newHooksPath = hooksPath.startsWith(".")
        ? hooksPath
        : "./" + hooksPath;

      content = content.replace(
        /from ["']@\/hooks\//g,
        `from "${newHooksPath}/`,
      );
      fs.writeFileSync(filePath, content, "utf8");
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

console.log("All imports fixed!");
