package com.drugprevention.entity;

import com.drugprevention.enums.AgeGroup;
import com.drugprevention.enums.CourseStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "courses")
@EntityListeners(AuditingEntityListener.class)
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 200)
    private String title;

    @Size(max = 1000)
    private String description;

    @Lob
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private AgeGroup targetAgeGroup;

    @Size(max = 100)
    private String category;

    private Integer duration; // in minutes

    @Size(max = 500)
    private String imageUrl;

    @Size(max = 500)
    private String videoUrl;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private CourseStatus status = CourseStatus.DRAFT;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<UserCourse> userCourses;

    // Constructors
    public Course() {}

    public Course(String title, String description, AgeGroup targetAgeGroup, String category) {
        this.title = title;
        this.description = description;
        this.targetAgeGroup = targetAgeGroup;
        this.category = category;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public AgeGroup getTargetAgeGroup() { return targetAgeGroup; }
    public void setTargetAgeGroup(AgeGroup targetAgeGroup) { this.targetAgeGroup = targetAgeGroup; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Integer getDuration() { return duration; }
    public void setDuration(Integer duration) { this.duration = duration; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getVideoUrl() { return videoUrl; }
    public void setVideoUrl(String videoUrl) { this.videoUrl = videoUrl; }

    public CourseStatus getStatus() { return status; }
    public void setStatus(CourseStatus status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public List<UserCourse> getUserCourses() { return userCourses; }
    public void setUserCourses(List<UserCourse> userCourses) { this.userCourses = userCourses; }
}
