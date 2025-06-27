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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Clock,
  Eye,
} from "lucide-react";

const Blog = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [searchTerm, setSearchTerm] = useState("");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "Hành trình vượt qua cám dỗ ma túy của một thanh niên",
      excerpt:
        "Chia sẻ câu chuyện thực tế về cách một bạn trẻ đã vượt qua giai đoạn khó khăn và tìm lại động lực sống tích cực...",
      content: "Nội dung chi tiết...",
      author: {
        name: "Nguyễn Văn Minh",
        avatar: "/placeholder.svg",
        role: "Tình nguyện viên",
      },
      category: "Câu chuyện thực tế",
      tags: ["Vượt khó", "Thanh niên", "Động lực"],
      publishDate: "2024-01-15",
      readTime: 8,
      views: 1234,
      likes: 89,
      comments: 23,
      featured: true,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Kinh nghiệm của một phụ huynh trong việc giáo dục con về ma túy",
      excerpt:
        "Những bài học quý báu từ một bà mẹ trong việc trò chuyện và giáo dục con em về tác hại của ma túy...",
      content: "Nội dung chi tiết...",
      author: {
        name: "Lê Thị Hoa",
        avatar: "/placeholder.svg",
        role: "Phụ huynh",
      },
      category: "Gia đình",
      tags: ["Phụ huynh", "Giáo dục", "Trẻ em"],
      publishDate: "2024-01-12",
      readTime: 6,
      views: 856,
      likes: 67,
      comments: 15,
      featured: false,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Cách nhận biết dấu hiệu sử dụng ma túy ở học sinh",
      excerpt:
        "Hướng dẫn chi tiết giúp giáo viên và phụ huynh nhận biết sớm các dấu hiệu cảnh báo...",
      content: "Nội dung chi tiết...",
      author: {
        name: "TS. Trần Văn Khoa",
        avatar: "/placeholder.svg",
        role: "Chuyên gia",
      },
      category: "Hướng dẫn",
      tags: ["Nhận biết", "Học sinh", "Phòng ngừa"],
      publishDate: "2024-01-10",
      readTime: 12,
      views: 2156,
      likes: 145,
      comments: 34,
      featured: true,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Hoạt động tuyên truyền tại trường THPT Nguyễn Du",
      excerpt:
        "Báo cáo về chương trình tuyên truyền phòng chống ma túy được tổ chức tại trường THPT Nguyễn Du...",
      content: "Nội dung chi tiết...",
      author: {
        name: "Ban tổ chức",
        avatar: "/placeholder.svg",
        role: "Tổ chức",
      },
      category: "Hoạt động",
      tags: ["Tuyên truyền", "Trường học", "Hoạt động"],
      publishDate: "2024-01-08",
      readTime: 5,
      views: 678,
      likes: 42,
      comments: 8,
      featured: false,
      image: "/placeholder.svg",
    },
  ];

  const categories = [
    "Tất cả",
    "Câu chuyện thực tế",
    "Gia đình",
    "Hướng dẫn",
    "Hoạt động",
    "Nghiên cứu",
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Header */}
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog chia sẻ kinh nghiệm
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Những câu chuyện thực tế, kinh nghiệm quý báu và hướng dẫn từ cộng
              đồng về phòng ngừa ma túy
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Bài viết nổi bật
                </h2>
                <Button variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Xem thêm
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-medical-100 text-medical-700">
                          Nổi bật
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          {post.readTime} phút đọc
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-medical-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>
                              {post.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Tất cả bài viết ({filteredPosts.length})
                </h2>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover rounded-lg"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-medical-100 text-medical-700">
                              Nổi bật
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <CardHeader className="pb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">
                              {new Date(post.publishDate).toLocaleDateString(
                                "vi-VN",
                              )}
                            </span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">
                              {post.readTime} phút đọc
                            </span>
                          </div>
                          <CardTitle className="text-xl hover:text-medical-600 transition-colors cursor-pointer">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>
                                  {post.author.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {post.author.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {post.author.role}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{post.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{post.comments}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Danh mục</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bài viết phổ biến</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 3)
                    .map((post, index) => (
                      <div key={post.id} className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-medical-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-medical-600">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-medical-600 cursor-pointer">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.views} lượt xem
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Write Post CTA */}
            <Card className="bg-gradient-to-br from-medical-50 to-wellness-50 border-medical-200">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-medical-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chia sẻ câu chuyện của bạn
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Giúp cộng đồng bằng cách chia sẻ kinh nghiệm và câu chuyện của
                  bạn
                </p>
                <Button className="w-full bg-medical-600 hover:bg-medical-700">
                  Viết bài mới
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Blog;
