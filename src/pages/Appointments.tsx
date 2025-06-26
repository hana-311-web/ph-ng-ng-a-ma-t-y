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
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Star,
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  Plus,
} from "lucide-react";

const Appointments = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock data
  const consultants = [
    {
      id: 1,
      name: "BS. Nguyễn Thị Lan",
      specialization: "Tâm lý học lâm sàng",
      experience: 8,
      rating: 4.9,
      reviews: 156,
      avatar: "/placeholder.svg",
      qualification: "Thạc sĩ Tâm lý học",
      bio: "Chuyên gia tư vấn tâm lý với 8 năm kinh nghiệm trong lĩnh vực phòng chống tệ nạn xã hội...",
      availableSlots: ["09:00", "10:30", "14:00", "15:30"],
    },
    {
      id: 2,
      name: "ThS. Trần Văn Minh",
      specialization: "Công tác xã hội",
      experience: 12,
      rating: 4.8,
      reviews: 203,
      avatar: "/placeholder.svg",
      qualification: "Thạc sĩ Công tác xã hội",
      bio: "Chuyên gia hàng đầu trong việc hỗ trợ cộng đồng và can thiệp khủng hoảng...",
      availableSlots: ["08:30", "11:00", "13:30", "16:00"],
    },
    {
      id: 3,
      name: "BS. Lê Thị Hoa",
      specialization: "Y học gia đình",
      experience: 15,
      rating: 4.7,
      reviews: 189,
      avatar: "/placeholder.svg",
      qualification: "Bác sĩ Y học gia đình",
      bio: "Bác sĩ có nhiều năm kinh nghiệm trong việc tư vấn sức khỏe và phòng ngừa bệnh tật...",
      availableSlots: ["09:30", "11:30", "14:30", "17:00"],
    },
  ];

  const myAppointments = [
    {
      id: 1,
      consultant: "BS. Nguyễn Thị Lan",
      date: "2024-01-20",
      time: "09:00",
      status: "Đã xác nhận",
      type: "Tư vấn trực tuyến",
      notes: "Tư vấn về phòng ngừa ma túy cho thanh thiếu niên",
    },
    {
      id: 2,
      consultant: "ThS. Trần Văn Minh",
      date: "2024-01-15",
      time: "14:00",
      status: "Hoàn thành",
      type: "Tư vấn trực tiếp",
      notes: "Hỗ trợ gia đình có con gặp vấn đề",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đã xác nhận":
        return "bg-wellness-100 text-wellness-700";
      case "Hoàn thành":
        return "bg-blue-100 text-blue-700";
      case "Đã hủy":
        return "bg-red-100 text-red-700";
      case "Chờ xác nhận":
        return "bg-yellow-100 text-yellow-700";
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
              Đặt lịch tư vấn
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kết nối với các chuyên gia tâm lý và công tác xã hội để nhận được
              sự hỗ trợ chuyên nghiệp
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="book" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="book">Đặt lịch mới</TabsTrigger>
            <TabsTrigger value="history">Lịch hẹn của tôi</TabsTrigger>
          </TabsList>

          <TabsContent value="book" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Chọn chuyên viên tư vấn
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tất cả chuyên viên đều có bằng cấp chuyên môn và kinh nghiệm
                thực tế trong lĩnh vực phòng chống ma túy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultants.map((consultant) => (
                <Card
                  key={consultant.id}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={consultant.avatar}
                        alt={consultant.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {consultant.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          {consultant.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Badge variant="outline">
                        {consultant.specialization}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{consultant.experience} năm KN</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{consultant.rating}</span>
                          <span>({consultant.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {consultant.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Khung giờ có sẵn hôm nay:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {consultant.availableSlots.slice(0, 3).map((slot) => (
                          <Badge
                            key={slot}
                            variant="outline"
                            className="text-xs"
                          >
                            {slot}
                          </Badge>
                        ))}
                        {consultant.availableSlots.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{consultant.availableSlots.length - 3} khác
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Dialog
                      open={
                        bookingModalOpen &&
                        selectedConsultant?.id === consultant.id
                      }
                      onOpenChange={(open) => {
                        setBookingModalOpen(open);
                        if (open) setSelectedConsultant(consultant);
                        else setSelectedConsultant(null);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button className="w-full bg-medical-600 hover:bg-medical-700">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Đặt lịch hẹn
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>
                            Đặt lịch với {consultant.name}
                          </DialogTitle>
                          <DialogDescription>
                            Chọn ngày, giờ và mô tả vấn đề cần tư vấn
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          <div>
                            <Label>Chọn ngày</Label>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border"
                              disabled={(date) => date < new Date()}
                            />
                          </div>

                          <div>
                            <Label>Chọn giờ</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn khung giờ" />
                              </SelectTrigger>
                              <SelectContent>
                                {consultant.availableSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Hình thức tư vấn</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Chọn hình thức" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="online">
                                  Tư vấn trực tuyến
                                </SelectItem>
                                <SelectItem value="offline">
                                  Tư vấn trực tiếp
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Mô tả vấn đề</Label>
                            <Textarea
                              placeholder="Mô tả ngắn gọn vấn đề cần tư vấn..."
                              className="min-h-[100px]"
                            />
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={() => setBookingModalOpen(false)}
                            >
                              Hủy
                            </Button>
                            <Button className="flex-1 bg-medical-600 hover:bg-medical-700">
                              Xác nhận đặt lịch
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lịch hẹn của tôi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quản lý và theo dõi tất cả các cuộc hẹn tư vấn của bạn
              </p>
            </div>

            {myAppointments.length > 0 ? (
              <div className="space-y-6">
                {myAppointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {appointment.consultant}
                          </CardTitle>
                          <CardDescription>
                            {new Date(appointment.date).toLocaleDateString(
                              "vi-VN",
                            )}{" "}
                            - {appointment.time}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <div className="text-sm text-gray-600 mt-1">
                            {appointment.type}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {appointment.notes}
                      </p>
                      <div className="flex space-x-2">
                        {appointment.status === "Đã xác nhận" && (
                          <>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Nhắn tin
                            </Button>
                            <Button variant="outline" size="sm">
                              <Phone className="w-4 h-4 mr-2" />
                              Gọi điện
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="w-4 h-4 mr-2" />
                              Hủy lịch
                            </Button>
                          </>
                        )}
                        {appointment.status === "Hoàn thành" && (
                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-2" />
                            Đánh giá
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Chưa có lịch hẹn nào
                </h3>
                <p className="text-gray-600 mb-4">
                  Đặt lịch hẹn đầu tiên để nhận được hỗ trợ từ chuyên gia
                </p>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Đặt lịch mới
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

export default Appointments;
