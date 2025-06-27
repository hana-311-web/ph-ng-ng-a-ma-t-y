import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Navigation } from "@/components/Navigation";
import { AuthModal } from "@/components/AuthModal";
import {
  Shield,
  GraduationCap,
  Users,
  Calendar,
  BarChart3,
  Heart,
  BookOpen,
  UserCheck,
  Award,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-medical-100 text-medical-700 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Tổ chức tình nguyện phòng chống ma túy
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hệ thống hỗ trợ
              <span className="bg-gradient-to-r from-medical-600 to-wellness-600 bg-clip-text text-transparent block">
                Phòng ngừa ma túy
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Cung cấp giáo dục, đánh giá rủi ro và hỗ trợ chuyên nghiệp để xây
              dựng cộng đồng khỏe mạnh, an toàn và tránh xa tệ nạn xã hội.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-4 text-lg h-auto"
                onClick={() => openAuth("register")}
              >
                <UserCheck className="w-5 h-5 mr-2" />
                Đăng ký tham gia
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-medical-200 text-medical-600 hover:bg-medical-50 px-8 py-4 text-lg h-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Xem video giới thiệu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tính năng chính
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hệ thống toàn diện hỗ trợ phòng ngừa và can thiệp sử dụng ma túy
              trong cộng đồng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Feature */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Khóa học trực tuyến
                </CardTitle>
                <CardDescription>
                  Nội dung giáo dục được phân chia theo độ tuổi: học sinh, sinh
                  viên, phụ huynh, giáo viên
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Nhận thức về ma túy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Kỹ năng phòng tránh
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Kỹ năng từ chối
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Assessment Feature */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-support-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-support-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Đánh giá rủi ro
                </CardTitle>
                <CardDescription>
                  Bài khảo sát ASSIST, CRAFFT để xác định mức độ nguy cơ sử dụng
                  ma túy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Đánh giá mức độ rủi ro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Đề xuất hành động phù hợp
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Theo dõi tiến triển
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Consultation Feature */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-wellness-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-wellness-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Tư vấn trực tuyến
                </CardTitle>
                <CardDescription>
                  Đặt lịch hẹn với chuyên viên tư vấn có kinh nghiệm để được hỗ
                  trợ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Chuyên viên có bằng cấp
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Lịch hẹn linh hoạt
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-wellness-500" />
                    Tư vấn bảo mật
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Programs */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Chương trình cộng đồng
                </CardTitle>
                <CardDescription>
                  Quản lý và tham gia các chương trình truyền thông, giáo dục
                  cộng đồng
                </CardDescription>
              </CardHeader>
            </Card>

            {/* User Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-support-100 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-support-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Quản lý hồ sơ
                </CardTitle>
                <CardDescription>
                  Theo dõi lịch sử học tập, lịch hẹn và tham gia các hoạt động
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Analytics */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-wellness-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-wellness-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Báo cáo & Thống kê
                </CardTitle>
                <CardDescription>
                  Dashboard và báo cáo chi tiết về hiệu quả các chương trình
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hệ thống phân quyền
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Được thiết kế cho nhiều đối tượng người dùng với quyền truy cập
              phù hợp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "Guest",
                desc: "Khách tham quan",
                color: "bg-gray-100 text-gray-700",
                access: "Xem thông tin công khai",
              },
              {
                role: "Member",
                desc: "Thành viên",
                color: "bg-medical-100 text-medical-700",
                access: "Tham gia khóa học, đánh giá",
              },
              {
                role: "Staff",
                desc: "Nhân viên",
                color: "bg-wellness-100 text-wellness-700",
                access: "Quản lý n��i dung",
              },
              {
                role: "Consultant",
                desc: "Chuyên viên tư vấn",
                color: "bg-support-100 text-support-700",
                access: "Tư vấn, lịch hẹn",
              },
              {
                role: "Manager",
                desc: "Quản lý",
                color: "bg-medical-100 text-medical-700",
                access: "Quản lý chương trình",
              },
              {
                role: "Admin",
                desc: "Quản trị viên",
                color: "bg-gray-800 text-white",
                access: "Toàn quyền hệ thống",
              },
            ].map((item) => (
              <Card key={item.role} className="border-0 shadow-md">
                <CardHeader>
                  <Badge className={`${item.color} w-fit`}>{item.role}</Badge>
                  <CardTitle className="text-lg">{item.desc}</CardTitle>
                  <CardDescription>{item.access}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Liên hệ hỗ trợ
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn trong hành trình phòng ngừa ma
              túy
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-medical-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hotline 24/7
                </h3>
                <p className="text-gray-600">1900 1234</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-wellness-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-wellness-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Địa chỉ
                </h3>
                <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-support-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-support-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Giờ làm việc
                </h3>
                <p className="text-gray-600">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-4 text-lg h-auto"
                onClick={() => openAuth("register")}
              >
                Bắt đầu ngay hôm nay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
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

export default Index;
