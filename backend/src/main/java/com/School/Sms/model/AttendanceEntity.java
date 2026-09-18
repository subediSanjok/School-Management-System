package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "attendance_records")
public class AttendanceEntity {

    @Id
    @Column(length = 40)
    private String className;

    @Column(name = "attendance_percent", nullable = false)
    private int attendancePercent;

    @Column(nullable = false)
    private String remark;

    public AttendanceEntity() {
    }

    public AttendanceEntity(String className, int attendancePercent, String remark) {
        this.className = className;
        this.attendancePercent = attendancePercent;
        this.remark = remark;
    }

    public String getClassName() { return className; }
    public void setClassName(String className) { this.className = className; }
    public int getAttendancePercent() { return attendancePercent; }
    public void setAttendancePercent(int attendancePercent) { this.attendancePercent = attendancePercent; }
    public String getRemark() { return remark; }
    public void setRemark(String remark) { this.remark = remark; }
}

