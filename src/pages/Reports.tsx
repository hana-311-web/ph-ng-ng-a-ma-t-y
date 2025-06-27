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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Target,
  Download,
  Filter,
  Eye,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  PieChart,
} from "lucide-react";

const Reports = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [timeRange, setTimeRange] = useState("30days");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock analytics data
  const overviewStats = {
    totalUsers: 1234,
    activeUsers: 856,
    newUsersThisMonth: 123,
    totalCourses: 15,
    courseCompletions: 456,
    totalAssessments: 789,
    highRiskUsers: 23,
    totalAppointments: 234,
    completedAppointments: 189,
    totalPrograms: 8,
    programParticipants: 567,
  };

  const userGrowth = [
    { month: "Jan", users: 800, newUsers: 50 },
    { month: "Feb", users: 920, newUsers: 120 },
    { month: "Mar", users: 1050, newUsers: 130 },
    { month: "Apr", users: 1180, newUsers: 130 },
    { month: "May", users: 1234, newUsers: 54 },
  ];

  const courseStats = [
    {
      title: "Nhận thức về tác hại của ma túy",
      enrolled: 456,
      completed: 398,
      completionRate: 87,
      averageRating: 4.8,
      category: "Cơ bản",
    },
    {
      title: "Kỹ năng từ chối và phòng tránh",
      enrolled: 234,
      completed: 189,
      completionRate: 81,
      averageRating: 4.6,
      category: "Kỹ năng",
    },
    {
      title: "Hướng dẫn cha mẹ phòng ngừa ma túy",
      enrolled: 178,
      completed: 134,
      completionRate: 75,
      averageRating: 4.9,
      category: "Gia đình",
    },
  ];

  const assessmentStats = [
    {
      type: "ASSIST",
      total: 456,
      lowRisk: 398,
      moderateRisk: 45,
      highRisk: 13,
      averageScore: 8.5,
    },
    {
      type: "CRAFFT",
      total: 234,
      lowRisk: 201,
      moderateRisk: 28,
      highRisk: 5,
      averageScore: 2.1,
    },
  ];

  const consultantStats = [
    {
      name: "BS. Nguyễn Thị Lan",
      totalAppointments: 89,
      completedAppointments: 82,
      averageRating: 4.9,
      specialization: "Tâm lý học",
      responseTime: "2 giờ",
    },
    {
      name: "ThS. Trần Văn Minh",
      totalAppointments: 67,
      completedAppointments: 61,
      averageRating: 4.7,
      specialization: "Công tác xã hội",
      responseTime: "3 giờ",
    },
  ];

  const programStats = [
    {
      title: "Tuần lễ tuyên truyền phòng chống ma túy",
      participants: 234,
      targetAudience: 500,
      completionRate: 89,
      satisfactionScore: 4.6,
      preAssessmentAvg: 15.2,
      postAssessmentAvg: 8.7,
      improvement: 43,
    },
    {
      title: "Hội thảo kỹ năng sống cho thanh thiếu niên",
      participants: 156,
      targetAudience: 200,
      completionRate: 92,
      satisfactionScore: 4.8,
      preAssessmentAvg: 12.8,
      postAssessmentAvg: 6.2,
      improvement: 52,
    },
  ];

  const riskDistribution = [
    { level: "Thấp", count: 945, percentage: 76.5, color: "bg-wellness-500" },
    {
      level: "Trung bình",
      count: 234,
      percentage: 19.0,
      color: "bg-yellow-500",
    },
    { level: "Cao", count: 45, percentage: 3.6, color: "bg-orange-500" },
    { level: "Rất cao", count: 10, percentage: 0.9, color: "bg-red-500" },
  ];

  const getCompletionRateColor = (rate: number) => {
    if (rate >= 80) return "text-wellness-600";
    if (rate >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-wellness-600";
    if (rating >= 4.0) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Header */}
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Báo cáo & Thống kê
              </h1>
              <p className="text-xl text-gray-600">
                Phân tích hiệu quả và theo dõi tiến độ của hệ thống
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">7 ngày qua</SelectItem>
                  <SelectItem value="30days">30 ngày qua</SelectItem>
                  <SelectItem value="90days">90 ngày qua</SelectItem>
                  <SelectItem value="1year">1 năm qua</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Xuất báo cáo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.totalUsers}
              </p>
              <p className="text-xs text-gray-600">Tổng người dùng</p>
              <p className="text-xs text-wellness-600">
                +{overviewStats.newUsersThisMonth} tháng này
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.courseCompletions}
              </p>
              <p className="text-xs text-gray-600">Khóa học hoàn thành</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.totalAssessments}
              </p>
              <p className="text-xs text-gray-600">Bài đánh giá</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.highRiskUsers}
              </p>
              <p className="text-xs text-gray-600">Người dùng rủi ro cao</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.completedAppointments}
              </p>
              <p className="text-xs text-gray-600">Lịch hẹn hoàn thành</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {overviewStats.programParticipants}
              </p>
              <p className="text-xs text-gray-600">Người tham gia CT</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="courses">Khóa học</TabsTrigger>
            <TabsTrigger value="assessments">Đánh giá</TabsTrigger>
            <TabsTrigger value="consultants">Chuyên viên</TabsTrigger>
            <TabsTrigger value="programs">Chương trình</TabsTrigger>
            <TabsTrigger value="risks">Phân tích rủi ro</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* User Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Tăng trưởng người dùng</span>
                  </CardTitle>
                  <CardDescription>
                    Số lượng người dùng theo thời gian
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">
                        Biểu đồ tăng trưởng người dùng
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Hoạt động hệ thống</CardTitle>
                  <CardDescription>
                    Thống kê hoạt động trong 30 ngày qua
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                        <span className="text-sm">Người dùng hoạt động</span>
                      </div>
                      <span className="font-semibold">
                        {overviewStats.activeUsers}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-wellness-500 rounded-full"></div>
                        <span className="text-sm">Khóa học hoàn thành</span>
                      </div>
                      <span className="font-semibold">
                        {overviewStats.courseCompletions}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-support-500 rounded-full"></div>
                        <span className="text-sm">Bài đánh giá thực hiện</span>
                      </div>
                      <span className="font-semibold">
                        {overviewStats.totalAssessments}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                        <span className="text-sm">Lịch hẹn hoàn thành</span>
                      </div>
                      <span className="font-semibold">
                        {overviewStats.completedAppointments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả khóa học</CardTitle>
                <CardDescription>
                  Thống kê về tỷ lệ hoàn thành và đánh giá của các khóa học
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseStats.map((course, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {course.title}
                          </h3>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${
                                  i < Math.floor(course.averageRating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="text-sm text-gray-600 ml-1">
                              {course.averageRating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {course.enrolled}
                          </p>
                          <p className="text-sm text-gray-600">Đăng ký</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {course.completed}
                          </p>
                          <p className="text-sm text-gray-600">Hoàn thành</p>
                        </div>
                        <div>
                          <p
                            className={`text-2xl font-bold ${getCompletionRateColor(course.completionRate)}`}
                          >
                            {course.completionRate}%
                          </p>
                          <p className="text-sm text-gray-600">Tỷ lệ</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessments" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {assessmentStats.map((assessment, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Kết quả {assessment.type}</CardTitle>
                    <CardDescription>
                      Phân bố mức độ rủi ro từ bài đánh giá
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gray-900">
                          {assessment.total}
                        </p>
                        <p className="text-sm text-gray-600">
                          Tổng số bài đánh giá
                        </p>
                        <p className="text-sm text-gray-600">
                          Điểm trung bình: {assessment.averageScore}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-wellness-500 rounded-full"></div>
                            <span className="text-sm">Rủi ro thấp</span>
                          </div>
                          <span className="font-semibold">
                            {assessment.lowRisk}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm">Rủi ro trung bình</span>
                          </div>
                          <span className="font-semibold">
                            {assessment.moderateRisk}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm">Rủi ro cao</span>
                          </div>
                          <span className="font-semibold">
                            {assessment.highRisk}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consultants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả chuyên viên tư vấn</CardTitle>
                <CardDescription>
                  Thống kê về hoạt động và đánh giá của các chuyên viên
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {consultantStats.map((consultant, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {consultant.name}
                          </h3>
                          <Badge variant="outline">
                            {consultant.specialization}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${
                                  i < Math.floor(consultant.averageRating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="text-sm text-gray-600 ml-1">
                              {consultant.averageRating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">
                            {consultant.totalAppointments}
                          </p>
                          <p className="text-sm text-gray-600">Tổng lịch hẹn</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-wellness-600">
                            {consultant.completedAppointments}
                          </p>
                          <p className="text-sm text-gray-600">Hoàn thành</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-medical-600">
                            {consultant.responseTime}
                          </p>
                          <p className="text-sm text-gray-600">
                            Thời gian phản hồi
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả chương trình cộng đồng</CardTitle>
                <CardDescription>
                  Đánh giá tác động của các chương trình tuyên truyền
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {programStats.map((program, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-6 space-y-4"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <p className="text-xl font-bold text-gray-900">
                              {program.participants}
                            </p>
                            <p className="text-sm text-gray-600">
                              Người tham gia
                            </p>
                          </div>
                          <div>
                            <p className="text-xl font-bold text-wellness-600">
                              {program.completionRate}%
                            </p>
                            <p className="text-sm text-gray-600">Hoàn thành</p>
                          </div>
                          <div>
                            <p className="text-xl font-bold text-medical-600">
                              {program.satisfactionScore}
                            </p>
                            <p className="text-sm text-gray-600">Hài lòng</p>
                          </div>
                          <div>
                            <p className="text-xl font-bold text-support-600">
                              {program.improvement}%
                            </p>
                            <p className="text-sm text-gray-600">Cải thiện</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Đánh giá trước chương trình
                          </h4>
                          <p className="text-2xl font-bold text-orange-600">
                            {program.preAssessmentAvg}
                          </p>
                          <p className="text-sm text-gray-600">
                            Điểm trung bình
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Đánh giá sau chương trình
                          </h4>
                          <p className="text-2xl font-bold text-wellness-600">
                            {program.postAssessmentAvg}
                          </p>
                          <p className="text-sm text-gray-600">
                            Điểm trung bình
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="w-5 h-5" />
                    <span>Phân bố rủi ro</span>
                  </CardTitle>
                  <CardDescription>
                    Phân tích mức độ rủi ro trong cộng đồng
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskDistribution.map((risk, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 ${risk.color} rounded-full`}
                            ></div>
                            <span className="text-sm font-medium">
                              Rủi ro {risk.level}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold">{risk.count}</span>
                            <span className="text-sm text-gray-600 ml-1">
                              ({risk.percentage}%)
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${risk.color} h-2 rounded-full`}
                            style={{ width: `${risk.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Khuyến nghị can thiệp</CardTitle>
                  <CardDescription>
                    Hành động cần thực hiện dựa trên phân tích rủi ro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-red-700">
                        Ưu tiên cao (10 người)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cần can thiệp ngay lập tức với chuyên viên tâm lý
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-orange-700">
                        Ưu tiên trung bình (45 người)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tham gia khóa học chuyên sâu và theo dõi định kỳ
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-yellow-700">
                        Theo dõi (234 người)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tham gia các hoạt động phòng ngừa và giáo dục
                      </p>
                    </div>
                    <div className="border-l-4 border-wellness-500 pl-4">
                      <h4 className="font-semibold text-wellness-700">
                        Duy trì (945 người)
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tiếp tục các hoạt động giáo dục định kỳ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
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

export default Reports;
