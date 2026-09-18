package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "exam_results")
public class ExamEntity {

    @Id
    @Column(length = 60)
    private String examName;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String grade;

    public ExamEntity() {
    }

    public ExamEntity(String examName, String subject, String grade) {
        this.examName = examName;
        this.subject = subject;
        this.grade = grade;
    }

    public String getExamName() { return examName; }
    public void setExamName(String examName) { this.examName = examName; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getGrade() { return grade; }
    public void setGrade(String grade) { this.grade = grade; }
}

