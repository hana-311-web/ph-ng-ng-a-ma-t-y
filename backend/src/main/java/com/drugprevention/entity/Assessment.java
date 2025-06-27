package com.drugprevention.entity;

import com.drugprevention.enums.AssessmentType;
import com.drugprevention.enums.RiskLevel;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "assessments")
@EntityListeners(AuditingEntityListener.class)
public class Assessment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private AssessmentType type;

    @Lob
    private String questions;

    @Lob
    private String answers;

    private Integer totalScore;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RiskLevel riskLevel;

    @Size(max = 1000)
    private String recommendations;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // Constructors
    public Assessment() {}

    public Assessment(User user, AssessmentType type) {
        this.user = user;
        this.type = type;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public AssessmentType getType() { return type; }
    public void setType(AssessmentType type) { this.type = type; }

    public String getQuestions() { return questions; }
    public void setQuestions(String questions) { this.questions = questions; }

    public String getAnswers() { return answers; }
    public void setAnswers(String answers) { this.answers = answers; }

    public Integer getTotalScore() { return totalScore; }
    public void setTotalScore(Integer totalScore) { this.totalScore = totalScore; }

    public RiskLevel getRiskLevel() { return riskLevel; }
    public void setRiskLevel(RiskLevel riskLevel) { this.riskLevel = riskLevel; }

    public String getRecommendations() { return recommendations; }
    public void setRecommendations(String recommendations) { this.recommendations = recommendations; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
