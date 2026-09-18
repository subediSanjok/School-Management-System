package com.School.Sms.repository;

import com.School.Sms.model.AttendanceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<AttendanceEntity, String> {
}

