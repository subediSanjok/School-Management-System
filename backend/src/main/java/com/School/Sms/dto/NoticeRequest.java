package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record NoticeRequest(
        @NotBlank String title,
        @NotBlank String audience,
        @NotBlank String status
) {}

