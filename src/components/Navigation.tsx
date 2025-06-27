import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Shield,
  Menu,
  GraduationCap,
  BarChart3,
  Calendar,
  Users,
  User,
  LogOut,
  MessageSquare,
} from "lucide-react";

interface NavigationProps {
  onOpenAuth: (mode: "login" | "register") => void;
}

export const Navigation = ({ onOpenAuth }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // This would come from auth context

  const menuItems = [
    { name: "Trang chủ", href: "/", icon: Shield },
    { name: "Blog", href: "/blog", icon: MessageSquare },
    { name: "Khóa học", href: "/courses", icon: GraduationCap },
    { name: "Đánh giá", href: "/assessments", icon: BarChart3 },
    { name: "Đặt lịch hẹn", href: "/appointments", icon: Calendar },
    { name: "Chương trình", href: "/programs", icon: Users },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-medical-500 to-wellness-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              DrugPrevention
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-medical-600 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  {user.username}
                </Button>
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={() => onOpenAuth("login")}>
                  Đăng nhập
                </Button>
                <Button
                  className="bg-medical-600 hover:bg-medical-700"
                  onClick={() => onOpenAuth("register")}
                >
                  Đăng ký
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-900">{item.name}</span>
                    </Link>
                  ))}

                  <div className="border-t pt-4 space-y-2">
                    {user ? (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <User className="w-4 h-4 mr-2" />
                          {user.username}
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Đăng xuất
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full"
                          onClick={() => {
                            onOpenAuth("login");
                            setMobileMenuOpen(false);
                          }}
                        >
                          Đăng nhập
                        </Button>
                        <Button
                          className="w-full bg-medical-600 hover:bg-medical-700"
                          onClick={() => {
                            onOpenAuth("register");
                            setMobileMenuOpen(false);
                          }}
                        >
                          Đăng ký
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
