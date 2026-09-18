package com.School.Sms.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record AttendanceRequest(
        @NotBlank String className,
        @Min(0) @Max(100) int attendancePercent,
        @NotBlank String remark
) {}

