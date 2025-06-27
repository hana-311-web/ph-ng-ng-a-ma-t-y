#!/usr/bin/env node

/**
 * Fix import paths in UI components to use @ alias consistently
 * This script helps resolve import resolution issues in Vite
 */

const fs = require("fs");
const path = require("path");

const uiComponentsDir = "./src/components/ui";

// Get all .tsx files in ui components directory
const files = fs
  .readdirSync(uiComponentsDir)
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => path.join(uiComponentsDir, file));

let fixedCount = 0;

files.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace relative imports with @ alias
    const originalContent = content;
    content = content.replace(
      /import\s+\{\s*cn\s*\}\s+from\s+['"]\.\.\/\.\.\/lib\/utils['"];?/g,
      'import { cn } from "@/lib/utils";',
    );

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Fixed imports in ${fixedCount} files`);
if (fixedCount === 0) {
  console.log("✨ All imports are already correct!");
}
