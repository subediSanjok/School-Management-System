package com.School.Sms.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record SyllabusRequest(
        @NotBlank String subject,
        @Min(0) int topics,
        @Min(0) int progress,
        @NotBlank String status
) {}

