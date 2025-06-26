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
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  Plus,
  Search,
  Filter,
} from "lucide-react";

const Programs = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock data
  const programs = [
    {
      id: 1,
      title: "Tuần lễ tuyên truyền phòng chống ma túy",
      description:
        "Chương trình tuyên truyền và giáo dục cộng đồng về tác hại của ma túy",
      type: "Tuyên truyền",
      startDate: "2024-02-01",
      endDate: "2024-02-07",
      location: "Trung tâm Văn hóa TP.HCM",
      maxParticipants: 500,
      registered: 234,
      status: "Sắp diễn ra",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Hội thảo kỹ năng sống cho thanh thiếu niên",
      description:
        "Chương trình đào tạo kỹ năng sống và phòng tránh tệ nạn xã hội",
      type: "Workshop",
      startDate: "2024-02-15",
      endDate: "2024-02-15",
      location: "Trường THPT ABC",
      maxParticipants: 100,
      registered: 67,
      status: "Đang mở đăng ký",
      image: "/placeholder.svg",
    },
  ];

  const myPrograms = [
    {
      id: 1,
      title: "Tuần lễ tuyên truyền phòng chống ma túy",
      registeredDate: "2024-01-15",
      status: "Đã đăng ký",
      attendance: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đang mở đăng ký":
        return "bg-wellness-100 text-wellness-700";
      case "Sắp diễn ra":
        return "bg-blue-100 text-blue-700";
      case "Đã kết thúc":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuth={openAuth} />

      {/* Header */}
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Chương trình cộng đồng
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tham gia các hoạt động tuyên truyền, giáo dục và hỗ trợ cộng đồng
              phòng chống ma túy
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="available" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="available">Chương trình</TabsTrigger>
            <TabsTrigger value="registered">Đã đăng ký</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Chương trình sắp tới
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tham gia các hoạt động ý nghĩa để góp phần xây dựng cộng đồng
                khỏe mạnh
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(program.status)}>
                        {program.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{program.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(program.startDate).toLocaleDateString(
                            "vi-VN",
                          )}
                          {program.startDate !== program.endDate &&
                            ` - ${new Date(program.endDate).toLocaleDateString("vi-VN")}`}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>
                          {program.registered}/{program.maxParticipants} người
                          tham gia
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-medical-600 hover:bg-medical-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Đăng ký tham gia
                      </Button>
                      <Button variant="outline">Chi tiết</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Chương trình đã đăng ký
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Theo dõi và quản lý các chương trình bạn đã tham gia
              </p>
            </div>

            {myPrograms.length > 0 ? (
              <div className="space-y-6">
                {myPrograms.map((program) => (
                  <Card key={program.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {program.title}
                          </h3>
                          <p className="text-gray-600">
                            Đăng ký:{" "}
                            {new Date(
                              program.registeredDate,
                            ).toLocaleDateString("vi-VN")}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={getStatusColor(program.status)}
                            className="mb-2"
                          >
                            {program.status}
                          </Badge>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              Chi tiết
                            </Button>
                            <Button variant="destructive" size="sm">
                              Hủy đăng ký
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Chưa đăng ký chương trình nào
                </h3>
                <p className="text-gray-600 mb-4">
                  Hãy tham gia các chương trình để đóng góp cho cộng đồng
                </p>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Xem chương trình
                </Button>
              </div>
            )}
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

export default Programs;
