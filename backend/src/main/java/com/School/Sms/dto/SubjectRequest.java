package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record SubjectRequest(
        @NotBlank String code,
        @NotBlank String name,
        @NotBlank String teacher,
        @NotBlank String status
) {}

