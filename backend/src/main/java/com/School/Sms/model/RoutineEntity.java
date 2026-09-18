package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "routine")
public class RoutineEntity {

    @Id
    @Column(length = 30)
    private String period;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String teacher;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String status;

    public RoutineEntity() {}

    public RoutineEntity(String period, String subject, String teacher, String time, String status) {
        this.period = period;
        this.subject = subject;
        this.teacher = teacher;
        this.time = time;
        this.status = status;
    }

    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getTeacher() { return teacher; }
    public void setTeacher(String teacher) { this.teacher = teacher; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

