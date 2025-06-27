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
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  TrendingUp,
  Calendar,
  Target,
} from "lucide-react";

const Assessments = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Mock data
  const assessmentTypes = [
    {
      id: "assist",
      name: "ASSIST",
      fullName: "Alcohol, Smoking and Substance Involvement Screening Test",
      description:
        "Công cụ sàng lọc nguy cơ sử dụng rượu, thuốc lá và các chất gây nghiện",
      duration: 10,
      questions: 8,
      difficulty: "Cơ bản",
      icon: BarChart3,
      color: "medical",
    },
    {
      id: "crafft",
      name: "CRAFFT",
      fullName: "Car, Relax, Alone, Forget, Friends, Trouble",
      description:
        "Bài test sàng lọc rủi ro sử dụng chất gây nghiện dành cho thanh thiếu niên",
      duration: 5,
      questions: 6,
      difficulty: "Đơn giản",
      icon: Target,
      color: "wellness",
    },
    {
      id: "general",
      name: "Đánh giá tổng quát",
      fullName: "General Risk Assessment",
      description:
        "Đánh giá tổng thể về nguy cơ và các yếu tố liên quan đến sử dụng ma túy",
      duration: 15,
      questions: 20,
      difficulty: "Trung cấp",
      icon: FileText,
      color: "support",
    },
  ];

  const myAssessments = [
    {
      id: 1,
      type: "ASSIST",
      date: "2024-01-15",
      score: 12,
      riskLevel: "Thấp",
      status: "Hoàn thành",
      recommendations: [
        "Tiếp tục duy trì lối sống lành mạnh",
        "Tham gia các hoạt động tích cực",
      ],
    },
    {
      id: 2,
      type: "CRAFFT",
      date: "2024-01-10",
      score: 2,
      riskLevel: "Thấp",
      status: "Hoàn thành",
      recommendations: [
        "Tiếp tục theo dõi và duy trì",
        "Tham gia khóa học phòng ngừa",
      ],
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
      <section className="bg-gradient-to-br from-medical-50 via-white to-wellness-50 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Đánh giá rủi ro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Các bài khảo sát chuyên nghiệp giúp xác định mức độ nguy cơ và đưa
              ra lời khuyên phù hợp
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="available" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="available">Bài đánh giá</TabsTrigger>
            <TabsTrigger value="history">Lịch sử</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Các bài đánh giá có sẵn
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chọn bài đánh giá phù hợp để hiểu rõ hơn về tình trạng và nhận
                được lời khuyên cá nhân hóa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assessmentTypes.map((assessment) => {
                const IconComponent = assessment.icon;
                return (
                  <Card
                    key={assessment.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${assessment.color}-400 to-${assessment.color}-600`}
                    />

                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`w-12 h-12 bg-${assessment.color}-100 rounded-lg flex items-center justify-center`}
                        >
                          <IconComponent
                            className={`w-6 h-6 text-${assessment.color}-600`}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {assessment.name}
                          </CardTitle>
                          <Badge variant="outline">
                            {assessment.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed">
                        {assessment.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{assessment.duration} phút</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span>{assessment.questions} câu hỏi</span>
                        </div>
                      </div>

                      <Button
                        className={`w-full bg-${assessment.color}-600 hover:bg-${assessment.color}-700`}
                      >
                        Bắt đầu đánh giá
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 rounded-2xl p-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thông tin quan trọng
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Các bài đánh giá này chỉ mang tính chất sàng lọc và tham khảo.
                  Để có kết quả chẩn đoán chính xác, vui lòng tham khảo ý kiến
                  chuyên gia y tế.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lịch sử đánh giá
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Theo dõi quá trình và sự thay đổi qua các lần đánh giá
              </p>
            </div>

            {myAssessments.length > 0 ? (
              <div className="space-y-6">
                {myAssessments.map((assessment) => (
                  <Card key={assessment.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {assessment.type}
                          </CardTitle>
                          <CardDescription>
                            Ngày thực hiện:{" "}
                            {new Date(assessment.date).toLocaleDateString(
                              "vi-VN",
                            )}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={getRiskLevelColor(assessment.riskLevel)}
                          >
                            {assessment.riskLevel}
                          </Badge>
                          <div className="text-sm text-gray-600 mt-1">
                            Điểm: {assessment.score}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Khuyến nghị:
                        </h4>
                        <ul className="space-y-1">
                          {assessment.recommendations.map((rec, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-wellness-500 mt-0.5 flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Xem chi tiết
                        </Button>
                        <Button variant="outline" size="sm">
                          Làm lại
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Progress Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Xu hướng rủi ro</span>
                    </CardTitle>
                    <CardDescription>
                      Biểu đồ thể hiện sự thay đổi mức độ rủi ro theo thời gian
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">
                        Biểu đồ xu hướng sẽ hiển thị tại đây
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Chưa có lịch sử đánh giá
                </h3>
                <p className="text-gray-600 mb-4">
                  Hãy thực hiện bài đánh giá đầu tiên để bắt đầu theo dõi
                </p>
                <Button>Thực hiện đánh giá</Button>
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

export default Assessments;
