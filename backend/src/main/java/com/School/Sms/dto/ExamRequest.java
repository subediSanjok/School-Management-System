package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record ExamRequest(
        @NotBlank String examName,
        @NotBlank String subject,
        @NotBlank String grade
) {}

