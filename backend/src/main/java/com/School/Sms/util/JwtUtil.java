package com.School.Sms.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private final Key key;
    private final long expirationMs;

    public JwtUtil(@Value("${jwt.secret:defaultsecretjwtkeypleasechange}") String secret,
                   @Value("${jwt.expiration-ms:3600000}") long expirationMs) {
        // Use provided secret - create key from bytes if provided; fallback to generated
        if (secret != null && !secret.isBlank() && !"defaultsecretjwtkeypleasechange".equals(secret)) {
            this.key = Keys.hmacShaKeyFor(secret.getBytes());
        } else {
            this.key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        }
        this.expirationMs = expirationMs;
    }

    public String generateToken(String subject, String role) {
        Date now = new Date();
        Date exp = new Date(now.getTime() + expirationMs);
        return Jwts.builder()
                .setSubject(subject)
                .claim("role", role)
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(key)
                .compact();
    }
}
