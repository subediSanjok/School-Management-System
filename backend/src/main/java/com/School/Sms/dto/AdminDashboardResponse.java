package com.School.Sms.dto;

import com.School.Sms.model.NoticeEntity;

import java.util.List;

public record AdminDashboardResponse(
        long students,
        long teachers,
        long parents,
        long notices,
        double averageAttendance,
        List<NoticeEntity> recentNotices
) {}

