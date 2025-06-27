package com.drugprevention.controller;

import com.drugprevention.entity.Course;
import com.drugprevention.enums.AgeGroup;
import com.drugprevention.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/public/all")
    public ResponseEntity<List<Course>> getAllPublishedCourses() {
        List<Course> courses = courseService.getAllPublishedCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/public/search")
    public ResponseEntity<List<Course>> searchCourses(@RequestParam String keyword) {
        List<Course> courses = courseService.searchPublishedCourses(keyword);
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/public/age-group/{ageGroup}")
    public ResponseEntity<List<Course>> getCoursesByAgeGroup(@PathVariable AgeGroup ageGroup) {
        List<Course> courses = courseService.getCoursesByAgeGroup(ageGroup);
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/public/categories")
    public ResponseEntity<List<String>> getAllCategories() {
        List<String> categories = courseService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/public/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        return ResponseEntity.ok(course);
    }

    @PostMapping("/{courseId}/enroll")
    @PreAuthorize("hasRole('MEMBER') or hasRole('ADMIN')")
    public ResponseEntity<?> enrollInCourse(@PathVariable Long courseId) {
        try {
            courseService.enrollUserInCourse(courseId);
            return ResponseEntity.ok(new MessageResponse("Đăng ký khóa học thành công!"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @GetMapping("/my-courses")
    @PreAuthorize("hasRole('MEMBER') or hasRole('ADMIN')")
    public ResponseEntity<List<Course>> getMyCourses() {
        List<Course> courses = courseService.getUserCourses();
        return ResponseEntity.ok(courses);
    }

    @PostMapping("/admin/create")
    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        try {
            Course createdCourse = courseService.createCourse(course);
            return ResponseEntity.ok(createdCourse);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @PutMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        try {
            Course updatedCourse = courseService.updateCourse(id, course);
            return ResponseEntity.ok(updatedCourse);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        try {
            courseService.deleteCourse(id);
            return ResponseEntity.ok(new MessageResponse("Xóa khóa học thành công!"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    public static class MessageResponse {
        private String message;

        public MessageResponse(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
