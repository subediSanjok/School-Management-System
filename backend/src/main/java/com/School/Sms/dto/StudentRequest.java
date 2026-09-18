package com.School.Sms.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record StudentRequest(
        @NotBlank String id,
        @NotBlank String name,
        @NotBlank String className,
        @NotBlank String section,
        @NotBlank String status,
        @Min(0) @Max(100) int attendancePercent,
        @NotBlank String guardian
) {}

