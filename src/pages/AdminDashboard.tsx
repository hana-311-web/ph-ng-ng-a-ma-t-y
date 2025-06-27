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
  BarChart3,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Shield,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";

const AdminDashboard = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock admin data
  const stats = {
    totalUsers: 1234,
    totalCourses: 15,
    totalAssessments: 456,
    totalAppointments: 89,
    totalPrograms: 8,
    activeConsultants: 12,
  };

  const recentUsers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      role: "Member",
      joinDate: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Lê Thị B",
      email: "lethib@example.com",
      role: "Member",
      joinDate: "2024-01-14",
      status: "active",
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Nhận thức về tác hại của ma túy",
      enrolled: 156,
      status: "published",
      lastUpdated: "2024-01-10",
    },
    {
      id: 2,
      title: "Kỹ năng từ chối và phòng tránh",
      enrolled: 89,
      status: "draft",
      lastUpdated: "2024-01-12",
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      consultant: "BS. Nguyễn Thị Lan",
      date: "2024-01-20",
      time: "09:00",
      status: "scheduled",
    },
    {
      id: 2,
      user: "Lê Thị B",
      consultant: "ThS. Trần Văn Minh",
      date: "2024-01-25",
      time: "14:00",
      status: "confirmed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "published":
      case "confirmed":
        return "bg-wellness-100 text-wellness-700";
      case "inactive":
      case "draft":
      case "scheduled":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Dashboard Quản trị
              </h1>
              <p className="text-xl text-gray-600">
                Quản lý và giám sát toàn bộ hệ thống
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Cài đặt
              </Button>
              <Button className="bg-medical-600 hover:bg-medical-700">
                <Plus className="w-4 h-4 mr-2" />
                Tạo mới
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers}
              </p>
              <p className="text-xs text-gray-600">Người dùng</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalCourses}
              </p>
              <p className="text-xs text-gray-600">Khóa học</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalAssessments}
              </p>
              <p className="text-xs text-gray-600">Đánh giá</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-4 h-4 text-medical-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalAppointments}
              </p>
              <p className="text-xs text-gray-600">Lịch hẹn</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-wellness-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Users className="w-4 h-4 text-wellness-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalPrograms}
              </p>
              <p className="text-xs text-gray-600">Chương trình</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-support-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-4 h-4 text-support-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeConsultants}
              </p>
              <p className="text-xs text-gray-600">Chuyên viên</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="users">Người dùng</TabsTrigger>
            <TabsTrigger value="courses">Khóa học</TabsTrigger>
            <TabsTrigger value="appointments">Lịch hẹn</TabsTrigger>
            <TabsTrigger value="reports">Báo cáo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Users */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Người dùng mới</span>
                    <Button variant="outline" size="sm">
                      Xem tất cả
                    </Button>
                  </CardTitle>
                  <CardDescription>Người dùng đăng ký gần đây</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(user.joinDate).toLocaleDateString(
                              "vi-VN",
                            )}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(user.status)}>
                            {user.role}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Khóa học</span>
                    <Button variant="outline" size="sm">
                      Quản lý
                    </Button>
                  </CardTitle>
                  <CardDescription>Trạng thái c��c khóa học</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCourses.map((course) => (
                      <div
                        key={course.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {course.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {course.enrolled} học viên
                          </p>
                          <p className="text-xs text-gray-500">
                            Cập nhật:{" "}
                            {new Date(course.lastUpdated).toLocaleDateString(
                              "vi-VN",
                            )}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(course.status)}>
                            {course.status === "published"
                              ? "Đã xuất bản"
                              : "Bản nháp"}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Lịch hẹn gần đây</CardTitle>
                <CardDescription>Các cuộc hẹn tư vấn sắp tới</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="grid grid-cols-4 gap-4 flex-1">
                        <div>
                          <p className="font-medium text-gray-900">
                            {appointment.user}
                          </p>
                          <p className="text-sm text-gray-600">Người dùng</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {appointment.consultant}
                          </p>
                          <p className="text-sm text-gray-600">Chuyên viên</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {new Date(appointment.date).toLocaleDateString(
                              "vi-VN",
                            )}
                          </p>
                          <p className="text-sm text-gray-600">
                            {appointment.time}
                          </p>
                        </div>
                        <div>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status === "scheduled"
                              ? "Đã lên lịch"
                              : "Đã xác nhận"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý người dùng</CardTitle>
                <CardDescription>
                  Tính năng quản lý người dùng sẽ được hiển thị tại đây
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Bảng quản lý người dùng sẽ hiển thị tại đây
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý khóa học</CardTitle>
                <CardDescription>
                  Tính năng quản lý khóa học sẽ được hiển th��� tại đây
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Bảng quản lý khóa học sẽ hiển thị tại đây
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Quản lý lịch hẹn</CardTitle>
                <CardDescription>
                  Tính năng quản lý lịch hẹn sẽ được hiển thị tại đây
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Bảng quản lý lịch hẹn sẽ hiển thị tại đây
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Báo cáo và thống kê</CardTitle>
                <CardDescription>
                  Các biểu đồ và báo cáo chi tiết
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Biểu đồ và báo cáo sẽ hiển thị tại đây
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default AdminDashboard;
