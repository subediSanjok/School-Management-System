package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "notices")
public class NoticeEntity {

    @Id
    @Column(length = 120)
    private String title;

    @Column(nullable = false)
    private String audience;

    @Column(nullable = false)
    private String status;

    public NoticeEntity() {
    }

    public NoticeEntity(String title, String audience, String status) {
        this.title = title;
        this.audience = audience;
        this.status = status;
    }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAudience() { return audience; }
    public void setAudience(String audience) { this.audience = audience; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

