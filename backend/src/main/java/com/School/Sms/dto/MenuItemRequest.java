package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record MenuItemRequest(
        @NotBlank String title,
        @NotBlank String sectionPath,
        @NotBlank String description,
        @NotBlank String status
) {}
