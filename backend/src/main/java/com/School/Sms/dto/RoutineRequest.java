package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record RoutineRequest(
        @NotBlank String period,
        @NotBlank String subject,
        @NotBlank String teacher,
        @NotBlank String time,
        @NotBlank String status
) {}

