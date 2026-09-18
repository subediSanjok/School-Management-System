package com.School.Sms.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record TeacherRequest(
        @NotBlank String id,
        @NotBlank String name,
        @NotBlank String subject,
        @NotBlank @Email String email,
        @NotBlank String phone,
        @NotBlank String status
) {}

