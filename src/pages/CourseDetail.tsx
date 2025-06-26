import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Play,
  CheckCircle,
  Download,
  ArrowLeft,
  Target,
  Award,
} from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [enrolled, setEnrolled] = useState(false);

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock course data - would come from API based on id
  const course = {
    id: parseInt(id || "1"),
    title: "Nhận thức về tác hại của ma túy",
    description:
      "Khóa học cơ bản về tác hại của ma túy đối với sức khỏe và xã hội. Được thiết kế để cung cấp kiến thức toàn diện về các loại ma túy, tác động và cách phòng ngừa.",
    category: "Nhận thức cơ bản",
    ageGroup: "Học sinh",
    duration: 45,
    enrolled: 156,
    rating: 4.8,
    reviews: 23,
    image: "/placeholder.svg",
    level: "Cơ bản",
    instructor: "TS. Nguyễn Văn Khang",
    instructorBio: "Chuyên gia tâm lý học với 15 năm kinh nghiệm",
    language: "Tiếng Việt",
    certificate: true,
    progress: enrolled ? 35 : 0,
    lessons: [
      {
        id: 1,
        title: "Giới thiệu về ma túy",
        duration: 8,
        completed: enrolled,
        locked: false,
      },
      {
        id: 2,
        title: "Các loại ma túy phổ biến",
        duration: 12,
        completed: enrolled,
        locked: false,
      },
      {
        id: 3,
        title: "Tác hại đối với sức khỏe",
        duration: 15,
        completed: false,
        locked: !enrolled,
      },
      {
        id: 4,
        title: "Tác động xã hội",
        duration: 10,
        completed: false,
        locked: !enrolled,
      },
    ],
    objectives: [
      "Hiểu được định nghĩa và phân loại ma túy",
      "Nhận biết các dấu hiệu sử dụng ma túy",
      "Nắm được tác hại của ma túy đối với sức khỏe",
      "Hiểu được tác động xã hội của ma túy",
      "Biết cách phòng ngừa v�� tránh xa ma túy",
    ],
    requirements: [
      "Không yêu cầu kiến thức trước",
      "Độ tuổi từ 15 trở lên",
      "Có kết nối internet ổn định",
      "Thiết bị xem video (máy tính/điện thoại)",
    ],
  };

  const handleEnroll = () => {
    setEnrolled(true);
    // API call would go here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-6">
            <Link
              to="/courses"
              className="inline-flex items-center text-medical-600 hover:text-medical-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách khóa học
            </Link>
          </div>
        </div>

        {/* Course Header */}
        <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-medical-100 text-medical-700">
                      {course.level}
                    </Badge>
                    <Badge variant="outline">{course.ageGroup}</Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>

                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {course.title}
                  </h1>

                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration} phút</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{course.enrolled} học viên</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                      <span>({course.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.language}</span>
                    </div>
                  </div>
                </div>

                {/* Progress for enrolled users */}
                {enrolled && (
                  <Card className="mb-8 border-wellness-200 bg-wellness-50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">
                          Tiến độ học tập
                        </h3>
                        <span className="text-sm text-gray-600">
                          {course.progress}% hoàn thành
                        </span>
                      </div>
                      <Progress value={course.progress} className="mb-4" />
                      <div className="flex items-center space-x-4">
                        <Button className="bg-wellness-600 hover:bg-wellness-700">
                          <Play className="w-4 h-4 mr-2" />
                          Tiếp tục học
                        </Button>
                        {course.progress > 80 && (
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Tải chứng chỉ
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      {!enrolled ? (
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                              Miễn phí
                            </div>
                            <p className="text-sm text-gray-600">
                              Khóa học hoàn toàn miễn phí
                            </p>
                          </div>
                          <Button
                            className="w-full bg-medical-600 hover:bg-medical-700 text-lg h-12"
                            onClick={handleEnroll}
                          >
                            Đăng ký học ngay
                          </Button>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">
                              Truy cập trọn đời • Chứng chỉ hoàn thành
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-center">
                            <CheckCircle className="w-12 h-12 text-wellness-600 mx-auto mb-2" />
                            <p className="font-semibold text-gray-900">
                              Đã đăng ký
                            </p>
                          </div>
                          <Button className="w-full bg-wellness-600 hover:bg-wellness-700">
                            <Play className="w-4 h-4 mr-2" />
                            Tiếp tục học
                          </Button>
                        </div>
                      )}

                      <div className="mt-6 pt-6 border-t space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Giảng viên
                          </h4>
                          <p className="text-sm font-medium text-gray-900">
                            {course.instructor}
                          </p>
                          <p className="text-sm text-gray-600">
                            {course.instructorBio}
                          </p>
                        </div>

                        {course.certificate && (
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Award className="w-4 h-4 text-wellness-600" />
                            <span>Cấp chứng chỉ hoàn thành</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Tabs defaultValue="curriculum" className="space-y-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Nội dung</TabsTrigger>
                    <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
                    <TabsTrigger value="requirements">Yêu cầu</TabsTrigger>
                  </TabsList>

                  <TabsContent value="curriculum" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Chương trình học
                      </h3>
                      <div className="space-y-4">
                        {course.lessons.map((lesson, index) => (
                          <Card
                            key={lesson.id}
                            className={`${
                              lesson.locked
                                ? "opacity-60"
                                : "hover:shadow-md transition-shadow"
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                      lesson.completed
                                        ? "bg-wellness-100 text-wellness-700"
                                        : lesson.locked
                                          ? "bg-gray-100 text-gray-400"
                                          : "bg-medical-100 text-medical-700"
                                    }`}
                                  >
                                    {lesson.completed ? (
                                      <CheckCircle className="w-4 h-4" />
                                    ) : (
                                      index + 1
                                    )}
                                  </div>
                                  <div>
                                    <h4
                                      className={`font-medium ${
                                        lesson.locked
                                          ? "text-gray-400"
                                          : "text-gray-900"
                                      }`}
                                    >
                                      {lesson.title}
                                    </h4>
                                    <p
                                      className={`text-sm ${
                                        lesson.locked
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      {lesson.duration} phút
                                    </p>
                                  </div>
                                </div>
                                {!lesson.locked && (
                                  <Button variant="ghost" size="sm">
                                    <Play className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="objectives" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Mục tiêu học tập
                      </h3>
                      <div className="space-y-4">
                        {course.objectives.map((objective, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <Target className="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{objective}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="requirements" className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Yêu cầu tham gia
                      </h3>
                      <div className="space-y-4">
                        {course.requirements.map((requirement, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-wellness-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{requirement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
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

export default CourseDetail;
