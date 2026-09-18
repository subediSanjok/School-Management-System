package com.School.Sms.service;

import com.School.Sms.dto.AttendanceRequest;
import com.School.Sms.model.AttendanceEntity;
import com.School.Sms.repository.AttendanceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    public List<AttendanceEntity> findAll() {
        return attendanceRepository.findAll();
    }

    public AttendanceEntity create(AttendanceRequest request) {
        AttendanceEntity entity = new AttendanceEntity(
                request.className(),
                request.attendancePercent(),
                request.remark()
        );
        return attendanceRepository.save(entity);
    }

    public AttendanceEntity update(String className, AttendanceRequest request) {
        if (!className.equals(request.className())) {
            attendanceRepository.deleteById(className);
        }
        return create(request);
    }

    public void delete(String className) {
        attendanceRepository.deleteById(className);
    }
}
