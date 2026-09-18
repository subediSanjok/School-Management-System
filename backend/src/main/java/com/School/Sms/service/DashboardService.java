package com.School.Sms.service;

import com.School.Sms.dto.AdminDashboardResponse;
import com.School.Sms.model.NoticeEntity;
import com.School.Sms.repository.AttendanceRepository;
import com.School.Sms.repository.NoticeRepository;
import com.School.Sms.repository.ParentRepository;
import com.School.Sms.repository.StudentRepository;
import com.School.Sms.repository.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private final ParentRepository parentRepository;
    private final NoticeRepository noticeRepository;
    private final AttendanceRepository attendanceRepository;

    public DashboardService(
            StudentRepository studentRepository,
            TeacherRepository teacherRepository,
            ParentRepository parentRepository,
            NoticeRepository noticeRepository,
            AttendanceRepository attendanceRepository
    ) {
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.parentRepository = parentRepository;
        this.noticeRepository = noticeRepository;
        this.attendanceRepository = attendanceRepository;
    }

    public AdminDashboardResponse adminSummary() {
        List<NoticeEntity> recentNotices = noticeRepository.findAll().stream().limit(4).toList();
        double averageAttendance = attendanceRepository.findAll().stream()
                .mapToInt(item -> item.getAttendancePercent())
                .average()
                .orElse(0.0);

        return new AdminDashboardResponse(
                studentRepository.count(),
                teacherRepository.count(),
                parentRepository.count(),
                noticeRepository.count(),
                Math.round(averageAttendance * 10.0) / 10.0,
                recentNotices
        );
    }
}
