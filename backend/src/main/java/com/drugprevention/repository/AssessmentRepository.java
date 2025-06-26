package com.drugprevention.repository;

import com.drugprevention.entity.Assessment;
import com.drugprevention.entity.User;
import com.drugprevention.enums.AssessmentType;
import com.drugprevention.enums.RiskLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Long> {
    List<Assessment> findByUser(User user);
    List<Assessment> findByUserAndType(User user, AssessmentType type);
    List<Assessment> findByType(AssessmentType type);
    List<Assessment> findByRiskLevel(RiskLevel riskLevel);
    
    @Query("SELECT a FROM Assessment a WHERE a.user = :user ORDER BY a.createdAt DESC")
    List<Assessment> findByUserOrderByCreatedAtDesc(@Param("user") User user);
    
    @Query("SELECT a FROM Assessment a WHERE a.user = :user AND a.type = :type ORDER BY a.createdAt DESC")
    List<Assessment> findLatestAssessmentByUserAndType(@Param("user") User user, @Param("type") AssessmentType type);
    
    @Query("SELECT a FROM Assessment a WHERE a.createdAt BETWEEN :startDate AND :endDate")
    List<Assessment> findAssessmentsBetweenDates(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
}
