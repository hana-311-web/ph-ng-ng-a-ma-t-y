import { useState } from "react";
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
  BarChart3,
  BookOpen,
  Calendar,
  Trophy,
  TrendingUp,
  Clock,
  Target,
  Award,
  Users,
  CheckCircle,
  PlayCircle,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock user data
  const user = {
    name: "Nguyễn Văn A",
    role: "Member",
    joinDate: "2024-01-01",
    avatar: "/placeholder.svg",
  };

  const stats = {
    coursesCompleted: 3,
    coursesInProgress: 2,
    totalStudyTime: 120, // minutes
    assessmentsTaken: 2,
    appointmentsAttended: 1,
    programsJoined: 1,
  };

  const recentCourses = [
    {
      id: 1,
      title: "Nhận thức về tác hại của ma túy",
      progress: 100,
      completedDate: "2024-01-15",
      certificate: true,
    },
    {
      id: 2,
      title: "Kỹ năng từ chối và phòng tránh",
      progress: 65,
      estimatedTime: "25 phút còn lại",
      certificate: false,
    },
    {
      id: 3,
      title: "Hướng dẫn cha mẹ phòng ngừa ma túy",
      progress: 30,
      estimatedTime: "45 phút còn lại",
      certificate: false,
    },
  ];

  const recentAssessments = [
    {
      id: 1,
      type: "ASSIST",
      date: "2024-01-15",
      score: 12,
      riskLevel: "Thấp",
      recommendations: "Tiếp tục duy trì lối sống lành mạnh",
    },
    {
      id: 2,
      type: "CRAFFT",
      date: "2024-01-10",
      score: 2,
      riskLevel: "Thấp",
      recommendations: "Tham gia khóa học phòng ngừa",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      consultant: "BS. Nguyễn Thị Lan",
      date: "2024-01-20",
      time: "09:00",
      type: "Tư vấn trực tuyến",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Học viên tích cực",
      description: "Hoàn thành 3 khóa học",
      icon: Trophy,
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Người đánh giá",
      description: "Thực hiện 2 bài đánh giá",
      icon: Target,
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 3,
      title: "Tham gia tích cực",
      description: "Tham gia 5 chương trình",
      icon: Users,
      earned: false,
      progress: 20,
    },
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "Thấp":
        return "bg-wellness-100 text-wellness-700";
      case "Trung bình":
        return "bg-yellow-100 text-yellow-700";
      case "Cao":
        return "bg-orange-100 text-orange-700";
      case "Rất cao":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Header */}
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Chào mừng trở lại, {user.name}!
              </h1>
              <p className="text-gray-600">
                Tiếp tục hành trình học tập và phát triển của bạn
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.coursesCompleted}
              </p>
              <p className="text-xs text-gray-600">Khóa học hoàn thành</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <PlayCircle className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.coursesInProgress}
              </p>
              <p className="text-xs text-gray-600">Đang học</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalStudyTime}
              </p>
              <p className="text-xs text-gray-600">Phút học tập</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.assessmentsTaken}
              </p>
              <p className="text-xs text-gray-600">Bài đánh giá</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.appointmentsAttended}
              </p>
              <p className="text-xs text-gray-600">Cuộc hẹn</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.programsJoined}
              </p>
              <p className="text-xs text-gray-600">Chương trình</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Khóa học gần đây</span>
                </CardTitle>
                <CardDescription>
                  Tiếp tục học tập và hoàn thành các khóa học
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {course.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-2">
                        <Progress
                          value={course.progress}
                          className="flex-1 h-2"
                        />
                        <span className="text-sm text-gray-600">
                          {course.progress}%
                        </span>
                      </div>
                      {course.progress === 100 ? (
                        <p className="text-sm text-wellness-600 mt-1">
                          Hoàn thành: {course.completedDate}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-600 mt-1">
                          {course.estimatedTime}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      {course.certificate && (
                        <Badge className="bg-wellness-100 text-wellness-700">
                          <Award className="w-3 h-3 mr-1" />
                          Chứng chỉ
                        </Badge>
                      )}
                      <Button size="sm" variant="outline">
                        {course.progress === 100 ? "Xem lại" : "Tiếp tục"}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Assessments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Kết quả đánh giá gần đây</span>
                </CardTitle>
                <CardDescription>
                  Theo dõi mức độ rủi ro và khuyến nghị
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAssessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {assessment.type}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {new Date(assessment.date).toLocaleDateString("vi-VN")}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {assessment.recommendations}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={getRiskLevelColor(assessment.riskLevel)}
                      >
                        {assessment.riskLevel}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-1">
                        Điểm: {assessment.score}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Lịch hẹn sắp tới</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="p-4 border rounded-lg"
                      >
                        <h4 className="font-medium text-gray-900">
                          {appointment.consultant}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {new Date(appointment.date).toLocaleDateString(
                            "vi-VN",
                          )}{" "}
                          - {appointment.time}
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointment.type}
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" className="flex-1">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Tham gia
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Không có lịch hẹn sắp tới</p>
                )}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Thành tích</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div
                        key={achievement.id}
                        className={`p-4 border rounded-lg ${
                          achievement.earned
                            ? "bg-wellness-50 border-wellness-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              achievement.earned
                                ? "bg-wellness-100"
                                : "bg-gray-100"
                            }`}
                          >
                            <IconComponent
                              className={`w-5 h-5 ${
                                achievement.earned
                                  ? "text-wellness-600"
                                  : "text-gray-400"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-medium ${
                                achievement.earned
                                  ? "text-gray-900"
                                  : "text-gray-500"
                              }`}
                            >
                              {achievement.title}
                            </h4>
                            <p
                              className={`text-sm ${
                                achievement.earned
                                  ? "text-gray-600"
                                  : "text-gray-400"
                              }`}
                            >
                              {achievement.description}
                            </p>
                            {!achievement.earned && achievement.progress && (
                              <Progress
                                value={achievement.progress}
                                className="mt-2 h-1"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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

export default Dashboard;
