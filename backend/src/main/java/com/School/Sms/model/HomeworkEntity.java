package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "homework")
public class HomeworkEntity {

    @Id
    @Column(length = 80)
    private String title;

    @Column(name = "class_name", nullable = false)
    private String className;

    @Column(nullable = false)
    private String dueDate;

    @Column(nullable = false)
    private String submitted;

    @Column(nullable = false)
    private String status;

    public HomeworkEntity() {}

    public HomeworkEntity(String title, String className, String dueDate, String submitted, String status) {
        this.title = title;
        this.className = className;
        this.dueDate = dueDate;
        this.submitted = submitted;
        this.status = status;
    }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getClassName() { return className; }
    public void setClassName(String className) { this.className = className; }
    public String getDueDate() { return dueDate; }
    public void setDueDate(String dueDate) { this.dueDate = dueDate; }
    public String getSubmitted() { return submitted; }
    public void setSubmitted(String submitted) { this.submitted = submitted; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

