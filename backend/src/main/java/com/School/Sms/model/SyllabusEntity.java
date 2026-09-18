package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "syllabus")
public class SyllabusEntity {

    @Id
    @Column(length = 50)
    private String subject;

    @Column(nullable = false)
    private int topics;

    @Column(nullable = false)
    private int progress;

    @Column(nullable = false)
    private String status;

    public SyllabusEntity() {}

    public SyllabusEntity(String subject, int topics, int progress, String status) {
        this.subject = subject;
        this.topics = topics;
        this.progress = progress;
        this.status = status;
    }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public int getTopics() { return topics; }
    public void setTopics(int topics) { this.topics = topics; }
    public int getProgress() { return progress; }
    public void setProgress(int progress) { this.progress = progress; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

