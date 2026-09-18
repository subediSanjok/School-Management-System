package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record SectionRequest(
        @NotBlank String name,
        @NotBlank String className,
        @NotBlank String teacher,
        @NotBlank String status
) {}

