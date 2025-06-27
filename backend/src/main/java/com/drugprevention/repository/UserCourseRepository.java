package com.drugprevention.repository;

import com.drugprevention.entity.Course;
import com.drugprevention.entity.User;
import com.drugprevention.entity.UserCourse;
import com.drugprevention.enums.CourseProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserCourseRepository extends JpaRepository<UserCourse, Long> {
    List<UserCourse> findByUser(User user);
    List<UserCourse> findByCourse(Course course);
    Optional<UserCourse> findByUserAndCourse(User user, Course course);
    Boolean existsByUserAndCourse(User user, Course course);
    
    List<UserCourse> findByUserAndProgress(User user, CourseProgress progress);
    
    @Query("SELECT uc FROM UserCourse uc WHERE uc.user = :user ORDER BY uc.enrolledAt DESC")
    List<UserCourse> findByUserOrderByEnrolledAtDesc(@Param("user") User user);
    
    @Query("SELECT COUNT(uc) FROM UserCourse uc WHERE uc.course = :course")
    Long countByCourse(@Param("course") Course course);
    
    @Query("SELECT COUNT(uc) FROM UserCourse uc WHERE uc.course = :course AND uc.progress = 'COMPLETED'")
    Long countCompletedByCourse(@Param("course") Course course);
}
