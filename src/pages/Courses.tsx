import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Clock,
  Users,
  Play,
  BookOpen,
  Star,
  ChevronRight,
} from "lucide-react";

const Courses = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock data - would come from API
  const courses = [
    {
      id: 1,
      title: "Nhận thức về tác hại của ma túy",
      description:
        "Khóa học cơ bản về tác hại của ma túy đối với sức khỏe và xã hội",
      category: "Nhận thức cơ bản",
      ageGroup: "Học sinh",
      duration: 45,
      enrolled: 156,
      rating: 4.8,
      image: "/placeholder.svg",
      level: "Cơ bản",
    },
    {
      id: 2,
      title: "Kỹ năng từ chối và phòng tránh",
      description:
        "Học cách từ chối và tránh xa các tình huống có nguy cơ tiếp xúc ma túy",
      category: "Kỹ năng sống",
      ageGroup: "Sinh viên",
      duration: 60,
      enrolled: 89,
      rating: 4.9,
      image: "/placeholder.svg",
      level: "Trung cấp",
    },
    {
      id: 3,
      title: "Hướng dẫn cha mẹ phòng ngừa ma túy",
      description:
        "Kiến thức và kỹ năng giúp cha mẹ bảo vệ con em khỏi tệ nạn ma túy",
      category: "Gia đình",
      ageGroup: "Phụ huynh",
      duration: 90,
      enrolled: 234,
      rating: 4.7,
      image: "/placeholder.svg",
      level: "Nâng cao",
    },
    {
      id: 4,
      title: "Giáo dục phòng chống ma túy trong trường học",
      description:
        "Phương pháp và kỹ thuật giảng dạy về phòng chống ma túy cho giáo viên",
      category: "Giáo dục",
      ageGroup: "Giáo viên",
      duration: 120,
      enrolled: 67,
      rating: 4.6,
      image: "/placeholder.svg",
      level: "Chuyên nghiệp",
    },
  ];

  const categories = [
    "Tất cả",
    "Nhận thức cơ bản",
    "Kỹ năng sống",
    "Gia đình",
    "Giáo dục",
  ];

  const ageGroups = [
    "Tất cả",
    "Học sinh",
    "Sinh viên",
    "Phụ huynh",
    "Giáo viên",
    "Người lớn",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesAgeGroup =
      selectedAgeGroup === "all" || course.ageGroup === selectedAgeGroup;
    return matchesSearch && matchesCategory && matchesAgeGroup;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Header */}
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Khóa học trực tuyến
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nội dung giáo dục được thiết kế chuyên nghiệp, phù hợp với từng độ
              tuổi và đối tượng
            </p>

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Tìm kiếm khóa học..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category === "Tất cả" ? "all" : category}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedAgeGroup}
                  onValueChange={setSelectedAgeGroup}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn độ tuổi" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageGroups.map((ageGroup) => (
                      <SelectItem
                        key={ageGroup}
                        value={ageGroup === "Tất cả" ? "all" : ageGroup}
                      >
                        {ageGroup}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Kết quả tìm kiếm ({filteredCourses.length} khóa học)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-medical-100 text-medical-700">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-700">
                      {course.ageGroup}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{course.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-medical-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration} phút</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.enrolled} học viên</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      asChild
                      className="flex-1 bg-medical-600 hover:bg-medical-700"
                    >
                      <Link to={`/courses/${course.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Học ngay
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Không tìm thấy khóa học
              </h3>
              <p className="text-gray-600 mb-4">
                Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
              </p>
              <Button onClick={() => setSearchTerm("")}>Xóa bộ lọc</Button>
            </div>
          )}
        </div>
      </section>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Courses;
