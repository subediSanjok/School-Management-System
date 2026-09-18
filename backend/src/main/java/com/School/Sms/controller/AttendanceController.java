package com.School.Sms.controller;

import com.School.Sms.dto.AttendanceRequest;
import com.School.Sms.model.AttendanceEntity;
import com.School.Sms.service.AttendanceService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @GetMapping
    public List<AttendanceEntity> findAll() {
        return attendanceService.findAll();
    }

    @PostMapping
    public AttendanceEntity create(@Valid @RequestBody AttendanceRequest request) {
        return attendanceService.create(request);
    }

    @PutMapping("/{className}")
    public AttendanceEntity update(@PathVariable String className, @Valid @RequestBody AttendanceRequest request) {
        return attendanceService.update(className, request);
    }

    @DeleteMapping("/{className}")
    public void delete(@PathVariable String className) {
        attendanceService.delete(className);
    }
}
