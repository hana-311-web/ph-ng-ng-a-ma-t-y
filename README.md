# Hệ thống hỗ trợ phòng ngừa sử dụng ma túy

Phần mềm toàn diện hỗ trợ phòng ngừa sử dụng ma túy trong cộng đồng của tổ chức tình nguyện, bao gồm frontend React và backend Spring Boot.

## 🚀 Tính năng chính

### 👥 Hệ thống phân quyền

- **Guest**: Xem thông tin công khai
- **Member**: Tham gia khóa học, thực hiện đánh giá, đặt lịch hẹn
- **Staff**: Quản lý nội dung, hỗ trợ người dùng
- **Consultant**: Tư vấn trực tuyến, quản lý lịch hẹn
- **Manager**: Quản lý chương trình, báo cáo
- **Admin**: Toàn quyền hệ thống

### 📚 Khóa học trực tuyến

- Nội dung được phân chia theo độ tuổi (học sinh, sinh viên, phụ huynh, giáo viên)
- Các chủ đề: nhận thức ma túy, kỹ năng phòng tránh, kỹ năng từ chối
- Theo dõi tiến độ học tập và cấp chứng chỉ

### 📊 Đánh giá rủi ro

- Bài khảo sát ASSIST, CRAFFT
- Đánh giá mức độ nguy cơ sử dụng ma túy
- Đề xuất hành động phù hợp dựa trên kết quả

### 💬 Tư vấn trực tuyến

- Đặt lịch hẹn với chuyên viên có bằng cấp
- Tư vấn qua video call hoặc trực tiếp
- Quản lý hồ sơ và lịch sử tư vấn

### 🏛️ Quản lý chương trình cộng đồng

- Tổ chức các chương trình truyền thông, giáo dục
- Đăng ký tham gia và theo dõi hiệu quả
- Khảo sát trước/sau chương trình

### 📈 Dashboard & Báo cáo

- Thống kê chi tiết về hoạt động của hệ thống
- Báo cáo hiệu qu�� các chương trình
- Dashboard cá nhân cho từng người dùng

## 🛠️ Công nghệ sử dụng

### Frontend

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router 6** - Client-side routing
- **Radix UI** - Accessible components
- **Shadcn/ui** - Component library

### Backend

- **Spring Boot 3.2** - Java framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Database access
- **MySQL** - Database
- **JWT** - Token-based authentication
- **Maven** - Build tool

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js 18+
- Java 17+
- MySQL 8.0+
- Maven 3.8+

### Backend (Spring Boot)

1. **Cài đặt cơ sở dữ liệu**

```bash
# Tạo database MySQL
mysql -u root -p
CREATE DATABASE drug_prevention_db;
```

2. **Cấu hình database**

```bash
# Cập nhật file backend/src/main/resources/application.yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/drug_prevention_db
    username: your_username
    password: your_password
```

3. **Chạy backend**

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend sẽ chạy tại `http://localhost:8080`

### Frontend (React)

1. **Cài đặt dependencies**

```bash
npm install
```

2. **Chạy development server**

```bash
npm run dev
```

Frontend sẽ chạy tại `http://localhost:5173`

## ��� API Endpoints

### Authentication

- `POST /api/auth/register` - Đăng ký tài khoản
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/validate` - Xác thực token

### Courses

- `GET /api/courses/public/all` - Lấy tất cả khóa học công khai
- `GET /api/courses/public/search` - Tìm kiếm khóa học
- `POST /api/courses/{id}/enroll` - Đăng ký khóa học
- `GET /api/courses/my-courses` - Khóa học của tôi

### Assessments

- `POST /api/assessments` - Tạo bài đánh giá
- `GET /api/assessments/my-assessments` - Lịch sử đánh giá

### Appointments

- `GET /api/consultants` - Lấy danh sách chuyên viên
- `POST /api/appointments` - Đặt lịch hẹn
- `GET /api/appointments/my-appointments` - Lịch hẹn của tôi

## 🗂️ Cấu trúc dự án

```
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
│   └── package.json
├── backend/                 # Spring Boot application
│   ├── src/main/java/com/drugprevention/
│   │   ├── controller/     # REST controllers
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Data access
│   │   ├── entity/         # Database entities
│   │   ├── dto/            # Data transfer objects
│   │   ├── config/         # Configuration
│   │   └── security/       # Security configuration
│   ├── src/main/resources/
│   │   ├── application.yml # Application configuration
│   │   └── data.sql        # Sample data
│   └── pom.xml
└── README.md
```

## 🔐 Bảo mật

- JWT token authentication
- Role-based access control (RBAC)
- Password encryption với BCrypt
- CORS configuration
- Input validation và sanitization

## 📊 Database Schema

### Các bảng chính:

- `users` - Thông tin người dùng
- `courses` - Khóa học
- `user_courses` - Quan hệ người dùng-khóa học
- `assessments` - Bài đánh giá
- `consultants` - Chuyên viên tư vấn
- `appointments` - Lịch hẹn
- `programs` - Chương trình cộng đồng
- `program_participants` - Người tham gia chương trình

## 🧪 Testing

### Frontend

```bash
npm test
```

### Backend

```bash
mvn test
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)

```bash
npm run build
# Deploy dist/ folder
```

### Backend (Docker)

```bash
# Tạo Docker image
docker build -t drug-prevention-backend .

# Chạy container
docker run -p 8080:8080 drug-prevention-backend
```

## 📞 Hỗ trợ

- Email: support@drugprevention.com
- Hotline: 1900 1234
- Documentation: [Link to docs]

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.

---

**Phát triển bởi**: Đội ngũ phát triển DrugPrevention System
**Phiên bản**: 1.0.0
**Cập nhật lần cuối**: $(date)
