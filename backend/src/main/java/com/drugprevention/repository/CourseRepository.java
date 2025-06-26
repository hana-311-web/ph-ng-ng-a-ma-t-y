package com.drugprevention.repository;

import com.drugprevention.entity.Course;
import com.drugprevention.enums.AgeGroup;
import com.drugprevention.enums.CourseStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByStatus(CourseStatus status);
    List<Course> findByTargetAgeGroup(AgeGroup ageGroup);
    List<Course> findByCategory(String category);
    
    @Query("SELECT c FROM Course c WHERE c.status = 'PUBLISHED'")
    List<Course> findPublishedCourses();
    
    @Query("SELECT c FROM Course c WHERE c.status = 'PUBLISHED' AND c.targetAgeGroup = :ageGroup")
    List<Course> findPublishedCoursesByAgeGroup(@Param("ageGroup") AgeGroup ageGroup);
    
    @Query("SELECT c FROM Course c WHERE c.status = 'PUBLISHED' AND (c.title LIKE %:searchTerm% OR c.description LIKE %:searchTerm%)")
    List<Course> searchPublishedCourses(@Param("searchTerm") String searchTerm);
    
    @Query("SELECT DISTINCT c.category FROM Course c WHERE c.status = 'PUBLISHED'")
    List<String> findAllCategories();
}
