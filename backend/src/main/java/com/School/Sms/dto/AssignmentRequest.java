package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record AssignmentRequest(
        @NotBlank String title,
        @NotBlank String className,
        @NotBlank String dueDate,
        @NotBlank String submitted,
        @NotBlank String status
) {}

