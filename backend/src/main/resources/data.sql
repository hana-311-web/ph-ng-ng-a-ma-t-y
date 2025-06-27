-- Create sample users
INSERT INTO users (username, email, password, first_name, last_name, role, active, email_verified, created_at, updated_at) VALUES
('admin', 'admin@drugprevention.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'System', 'Admin', 'ADMIN', true, true, NOW(), NOW()),
('manager1', 'manager@drugprevention.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Quản lý', 'Hệ thống', 'MANAGER', true, true, NOW(), NOW()),
('consultant1', 'consultant1@drugprevention.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Nguyễn Thị', 'Lan', 'CONSULTANT', true, true, NOW(), NOW()),
('consultant2', 'consultant2@drugprevention.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Trần Văn', 'Minh', 'CONSULTANT', true, true, NOW(), NOW()),
('member1', 'member1@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Nguyễn Văn', 'A', 'MEMBER', true, true, NOW(), NOW()),
('member2', 'member2@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Lê Thị', 'B', 'MEMBER', true, true, NOW(), NOW());

-- Create consultants
INSERT INTO consultants (user_id, specialization, qualification, license_number, bio, experience_years, profile_image_url, working_hours, available, created_at, updated_at) VALUES
(3, 'Tâm lý học lâm sàng', 'Thạc sĩ Tâm lý học', 'PSY001', 'Chuyên gia tư vấn tâm lý với 8 năm kinh nghiệm trong lĩnh vực phòng chống tệ nạn xã hội', 8, '/images/consultant1.jpg', '{"monday":["09:00","10:30","14:00","15:30"],"tuesday":["09:00","10:30","14:00","15:30"]}', true, NOW(), NOW()),
(4, 'Công tác xã hội', 'Thạc sĩ Công tác xã hội', 'SW001', 'Chuyên gia hàng đầu trong việc hỗ trợ cộng đồng và can thiệp khủng hoảng', 12, '/images/consultant2.jpg', '{"monday":["08:30","11:00","13:30","16:00"],"tuesday":["08:30","11:00","13:30","16:00"]}', true, NOW(), NOW());

-- Create courses
INSERT INTO courses (title, description, content, target_age_group, category, duration, image_url, video_url, status, created_at, updated_at) VALUES
('Nhận thức về tác hại của ma túy', 'Khóa học cơ bản về tác hại của ma túy đối với sức khỏe và xã hội', 'Nội dung chi tiết về tác hại của ma túy...', 'STUDENT', 'Nhận thức cơ bản', 45, '/images/course1.jpg', '/videos/course1.mp4', 'PUBLISHED', NOW(), NOW()),
('Kỹ năng từ chối và phòng tránh', 'Học cách từ chối và tránh xa các tình huống có nguy cơ tiếp xúc ma túy', 'Hướng dẫn chi tiết về kỹ năng từ chối...', 'COLLEGE_STUDENT', 'Kỹ năng sống', 60, '/images/course2.jpg', '/videos/course2.mp4', 'PUBLISHED', NOW(), NOW()),
('Hướng dẫn cha mẹ phòng ngừa ma túy', 'Kiến thức và kỹ năng giúp cha mẹ bảo vệ con em khỏi tệ nạn ma túy', 'Hướng dẫn cho phụ huynh...', 'PARENT', 'Gia đình', 90, '/images/course3.jpg', '/videos/course3.mp4', 'PUBLISHED', NOW(), NOW()),
('Giáo dục phòng chống ma túy trong trường học', 'Phương pháp và kỹ thuật giảng dạy về phòng chống ma túy cho giáo viên', 'Nội dung dành cho giáo viên...', 'TEACHER', 'Giáo dục', 120, '/images/course4.jpg', '/videos/course4.mp4', 'PUBLISHED', NOW(), NOW());

-- Create programs
INSERT INTO programs (title, description, type, start_date, end_date, location, max_participants, status, image_url, created_at, updated_at) VALUES
('Tuần lễ tuyên truyền phòng chống ma túy', 'Chương trình tuyên truyền và giáo dục cộng đồng về tác hại của ma túy', 'AWARENESS', '2024-02-01 08:00:00', '2024-02-07 17:00:00', 'Trung tâm Văn hóa TP.HCM', 500, 'PLANNED', '/images/program1.jpg', NOW(), NOW()),
('Hội thảo kỹ năng sống cho thanh thiếu niên', 'Chương trình đào tạo kỹ năng sống và phòng tránh tệ nạn xã hội', 'WORKSHOP', '2024-02-15 09:00:00', '2024-02-15 16:00:00', 'Trường THPT ABC', 100, 'PLANNED', '/images/program2.jpg', NOW(), NOW());

-- Create user course enrollments
INSERT INTO user_courses (user_id, course_id, progress, completion_percentage, enrolled_at, created_at, updated_at) VALUES
(5, 1, 'COMPLETED', 100, '2024-01-01 10:00:00', NOW(), NOW()),
(5, 2, 'IN_PROGRESS', 65, '2024-01-05 14:00:00', NOW(), NOW()),
(6, 1, 'IN_PROGRESS', 30, '2024-01-10 09:00:00', NOW(), NOW());

-- Create assessments
INSERT INTO assessments (user_id, type, questions, answers, total_score, risk_level, recommendations, created_at, updated_at) VALUES
(5, 'ASSIST', '{"question1":"Bạn có sử dụng rượu không?","question2":"..."}', '{"answer1":"Không","answer2":"..."}', 12, 'LOW', 'Tiếp tục duy trì lối sống lành mạnh và tham gia các hoạt động tích cực', NOW(), NOW()),
(5, 'CRAFFT', '{"question1":"Bạn có lái xe khi uống rượu không?","question2":"..."}', '{"answer1":"Không","answer2":"..."}', 2, 'LOW', 'Tiếp tục theo dõi và duy trì, tham gia khóa học phòng ngừa', NOW(), NOW());

-- Create appointments
INSERT INTO appointments (user_id, consultant_id, appointment_date, notes, status, created_at, updated_at) VALUES
(5, 1, '2024-01-20 09:00:00', 'Tư vấn về phòng ngừa ma túy cho thanh thiếu niên', 'SCHEDULED', NOW(), NOW()),
(6, 2, '2024-01-25 14:00:00', 'Hỗ trợ gia đình có con gặp vấn đề', 'SCHEDULED', NOW(), NOW());

-- Create program participants
INSERT INTO program_participants (user_id, program_id, status, registered_at, created_at, updated_at) VALUES
(5, 1, 'REGISTERED', NOW(), NOW(), NOW()),
(6, 1, 'REGISTERED', NOW(), NOW(), NOW()),
(5, 2, 'REGISTERED', NOW(), NOW(), NOW());
