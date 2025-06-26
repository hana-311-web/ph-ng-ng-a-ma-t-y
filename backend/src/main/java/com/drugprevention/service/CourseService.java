package com.drugprevention.service;

import com.drugprevention.entity.Course;
import com.drugprevention.entity.User;
import com.drugprevention.entity.UserCourse;
import com.drugprevention.enums.AgeGroup;
import com.drugprevention.enums.CourseProgress;
import com.drugprevention.enums.CourseStatus;
import com.drugprevention.repository.CourseRepository;
import com.drugprevention.repository.UserCourseRepository;
import com.drugprevention.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserCourseRepository userCourseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Course> getAllPublishedCourses() {
        return courseRepository.findPublishedCourses();
    }

    public List<Course> getCoursesByAgeGroup(AgeGroup ageGroup) {
        return courseRepository.findPublishedCoursesByAgeGroup(ageGroup);
    }

    public List<Course> searchPublishedCourses(String keyword) {
        return courseRepository.searchPublishedCourses(keyword);
    }

    public List<String> getAllCategories() {
        return courseRepository.findAllCategories();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy khóa học!"));
    }

    public void enrollUserInCourse(Long courseId) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));

        Course course = getCourseById(courseId);
        
        // Check if user already enrolled
        if (userCourseRepository.existsByUserAndCourse(user, course)) {
            throw new RuntimeException("Bạn đã đăng ký khóa học này rồi!");
        }

        UserCourse userCourse = new UserCourse(user, course);
        userCourse.setEnrolledAt(LocalDateTime.now());
        userCourseRepository.save(userCourse);
    }

    public List<Course> getUserCourses() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));

        List<UserCourse> userCourses = userCourseRepository.findByUser(user);
        return userCourses.stream()
                .map(UserCourse::getCourse)
                .collect(Collectors.toList());
    }

    public Course createCourse(Course course) {
        course.setStatus(CourseStatus.DRAFT);
        return courseRepository.save(course);
    }

    public Course updateCourse(Long id, Course courseDetails) {
        Course course = getCourseById(id);
        
        course.setTitle(courseDetails.getTitle());
        course.setDescription(courseDetails.getDescription());
        course.setContent(courseDetails.getContent());
        course.setTargetAgeGroup(courseDetails.getTargetAgeGroup());
        course.setCategory(courseDetails.getCategory());
        course.setDuration(courseDetails.getDuration());
        course.setImageUrl(courseDetails.getImageUrl());
        course.setVideoUrl(courseDetails.getVideoUrl());
        course.setStatus(courseDetails.getStatus());

        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        Course course = getCourseById(id);
        courseRepository.delete(course);
    }

    public void updateCourseProgress(Long courseId, Integer completionPercentage) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng!"));

        Course course = getCourseById(courseId);
        UserCourse userCourse = userCourseRepository.findByUserAndCourse(user, course)
                .orElseThrow(() -> new RuntimeException("Bạn chưa đăng ký khóa học này!"));

        userCourse.setCompletionPercentage(completionPercentage);
        
        if (completionPercentage >= 100) {
            userCourse.setProgress(CourseProgress.COMPLETED);
            userCourse.setCompletedAt(LocalDateTime.now());
        } else if (completionPercentage > 0) {
            userCourse.setProgress(CourseProgress.IN_PROGRESS);
        }

        userCourseRepository.save(userCourse);
    }
}
