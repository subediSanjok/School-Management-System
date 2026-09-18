package com.School.Sms.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ParentRequest(
        @NotBlank String id,
        @NotBlank String name,
        @NotBlank String relation,
        @NotBlank String phone,
        @NotBlank @Email String email,
        @NotBlank String status
) {}

