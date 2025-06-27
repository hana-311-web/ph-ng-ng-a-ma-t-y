import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  BookOpen,
  BarChart3,
  Users,
  Award,
  Download,
  Eye,
  Clock,
  CheckCircle,
} from "lucide-react";

const Profile = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [editing, setEditing] = useState(false);

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock user data
  const [userProfile, setUserProfile] = useState({
    id: 1,
    username: "nguyenvana",
    email: "nguyenvana@example.com",
    firstName: "Nguyễn Văn",
    lastName: "A",
    phoneNumber: "0123456789",
    dateOfBirth: "1995-05-15",
    gender: "Nam",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    avatar: "/placeholder.svg",
    role: "Member",
    joinDate: "2024-01-01",
    bio: "Học viên tích cực trong các chương trình phòng ngừa ma túy",
    interests: ["Sức khỏe tâm thần", "Giáo dục", "Tình nguyện"],
  });

  const stats = {
    coursesCompleted: 3,
    coursesInProgress: 2,
    totalStudyTime: 120,
    assessmentsTaken: 2,
    appointmentsAttended: 1,
    programsJoined: 1,
    articlesRead: 25,
    badgesEarned: 4,
  };

  const courseHistory = [
    {
      id: 1,
      title: "Nhận thức về tác hại của ma túy",
      completedDate: "2024-01-15",
      progress: 100,
      grade: "Xuất sắc",
      certificate: true,
    },
    {
      id: 2,
      title: "Kỹ năng từ chối và phòng tránh",
      completedDate: null,
      progress: 65,
      grade: null,
      certificate: false,
    },
    {
      id: 3,
      title: "Hướng dẫn cha mẹ phòng ngừa ma túy",
      completedDate: "2024-01-10",
      progress: 100,
      grade: "Tốt",
      certificate: true,
    },
  ];

  const assessmentHistory = [
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

  const appointmentHistory = [
    {
      id: 1,
      consultant: "BS. Nguyễn Thị Lan",
      date: "2024-01-12",
      time: "09:00",
      status: "Hoàn thành",
      notes: "Tư vấn về phòng ngừa ma túy cho thanh thiếu niên",
      rating: 5,
    },
  ];

  const programHistory = [
    {
      id: 1,
      title: "Tuần lễ tuyên truyền phòng chống ma túy",
      joinDate: "2024-01-05",
      status: "Đã tham gia",
      role: "Người tham gia",
    },
  ];

  const badges = [
    {
      id: 1,
      name: "Học viên tích cực",
      description: "Hoàn thành 3 khóa học",
      icon: "🏆",
      earned: true,
      earnedDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Người đánh giá",
      description: "Thực hiện 2 bài đánh giá",
      icon: "📊",
      earned: true,
      earnedDate: "2024-01-15",
    },
    {
      id: 3,
      name: "Tham gia tích cực",
      description: "Tham gia 5 chương trình",
      icon: "👥",
      earned: false,
      progress: 20,
    },
    {
      id: 4,
      name: "Chuyên gia nhỏ",
      description: "Hoàn thành 10 khóa học",
      icon: "🎓",
      earned: false,
      progress: 30,
    },
  ];

  const handleSaveProfile = () => {
    setEditing(false);
    // API call would go here
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hoàn thành":
      case "Đã tham gia":
        return "bg-wellness-100 text-wellness-700";
      case "Đang tiến hành":
        return "bg-blue-100 text-blue-700";
      case "Đã hủy":
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
          <div className="flex items-center space-x-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback className="text-2xl">
                {userProfile.firstName.charAt(0)}
                {userProfile.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {userProfile.firstName} {userProfile.lastName}
              </h1>
              <p className="text-gray-600">@{userProfile.username}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-medical-100 text-medical-700">
                  {userProfile.role}
                </Badge>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Tham gia từ{" "}
                    {new Date(userProfile.joinDate).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.coursesCompleted}
              </p>
              <p className="text-xs text-gray-600">Khóa học hoàn thành</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
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
              <p className="text-xl font-bold text-gray-900">
                {stats.totalStudyTime}
              </p>
              <p className="text-xs text-gray-600">Phút học</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.assessmentsTaken}
              </p>
              <p className="text-xs text-gray-600">Đánh giá</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.appointmentsAttended}
              </p>
              <p className="text-xs text-gray-600">Lịch hẹn</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.programsJoined}
              </p>
              <p className="text-xs text-gray-600">Chương trình</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Eye className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.articlesRead}
              </p>
              <p className="text-xs text-gray-600">Bài viết đọc</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats.badgesEarned}
              </p>
              <p className="text-xs text-gray-600">Huy hiệu</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Thông tin</TabsTrigger>
            <TabsTrigger value="courses">Khóa học</TabsTrigger>
            <TabsTrigger value="assessments">Đánh giá</TabsTrigger>
            <TabsTrigger value="appointments">Lịch hẹn</TabsTrigger>
            <TabsTrigger value="programs">Chương trình</TabsTrigger>
            <TabsTrigger value="badges">Huy hiệu</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                    <CardDescription>
                      Quản lý thông tin tài khoản của bạn
                    </CardDescription>
                  </div>
                  <Button
                    variant={editing ? "default" : "outline"}
                    onClick={
                      editing ? handleSaveProfile : () => setEditing(true)
                    }
                  >
                    {editing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Lưu
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Chỉnh sửa
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Họ</Label>
                      <Input
                        value={userProfile.firstName}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Tên</Label>
                      <Input
                        value={userProfile.lastName}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        value={userProfile.email}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Số điện thoại</Label>
                      <Input
                        value={userProfile.phoneNumber}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Ngày sinh</Label>
                      <Input
                        type="date"
                        value={userProfile.dateOfBirth}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            dateOfBirth: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Giới tính</Label>
                      <Select
                        value={userProfile.gender}
                        disabled={!editing}
                        onValueChange={(value) =>
                          setUserProfile((prev) => ({ ...prev, gender: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nam">Nam</SelectItem>
                          <SelectItem value="Nữ">Nữ</SelectItem>
                          <SelectItem value="Khác">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Địa chỉ</Label>
                      <Textarea
                        value={userProfile.address}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label>Giới thiệu</Label>
                      <Textarea
                        value={userProfile.bio}
                        disabled={!editing}
                        onChange={(e) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            bio: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            {courseHistory.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h3>
                      {course.completedDate && (
                        <p className="text-sm text-gray-600">
                          Hoàn thành:{" "}
                          {new Date(course.completedDate).toLocaleDateString(
                            "vi-VN",
                          )}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {course.grade && (
                        <Badge className="mb-2">{course.grade}</Badge>
                      )}
                      {course.certificate && (
                        <div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Tải chứng chỉ
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <span className="text-sm text-gray-600">
                      {course.progress}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="assessments" className="space-y-6">
            {assessmentHistory.map((assessment) => (
              <Card key={assessment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {assessment.type}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {new Date(assessment.date).toLocaleDateString("vi-VN")}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
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
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            {appointmentHistory.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {appointment.consultant}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {new Date(appointment.date).toLocaleDateString("vi-VN")}{" "}
                        - {appointment.time}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {appointment.notes}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                      {appointment.rating && (
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < appointment.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            {programHistory.map((program) => (
              <Card key={program.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Tham gia:{" "}
                        {new Date(program.joinDate).toLocaleDateString("vi-VN")}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Vai trò: {program.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(program.status)}>
                        {program.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={
                    badge.earned ? "bg-wellness-50 border-wellness-200" : ""
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{badge.icon}</div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold ${
                            badge.earned ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {badge.name}
                        </h3>
                        <p
                          className={`text-sm ${
                            badge.earned ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          {badge.description}
                        </p>
                        {badge.earned && badge.earnedDate && (
                          <p className="text-xs text-wellness-600 mt-1">
                            Đạt được:{" "}
                            {new Date(badge.earnedDate).toLocaleDateString(
                              "vi-VN",
                            )}
                          </p>
                        )}
                        {!badge.earned && badge.progress && (
                          <div className="mt-2">
                            <Progress value={badge.progress} className="h-1" />
                            <p className="text-xs text-gray-500 mt-1">
                              {badge.progress}% hoàn thành
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

export default Profile;
