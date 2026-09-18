package com.School.Sms.controller;

import com.School.Sms.service.GenericApiService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GenericApiController {

    private final GenericApiService genericApiService;

    public GenericApiController(GenericApiService genericApiService) {
        this.genericApiService = genericApiService;
    }

    @GetMapping("/{resource:^(?!students|teachers|parents|attendance|exams|fees|notices|subjects|classes|sections|routine|syllabus|homework|assignments|menu-items|academics|dashboard$).+}")
    public List<Map<String, Object>> findAll(@PathVariable String resource) {
        return genericApiService.findAll(resource);
    }

    @PostMapping("/{resource:^(?!students|teachers|parents|attendance|exams|fees|notices|subjects|classes|sections|routine|syllabus|homework|assignments|menu-items|academics|dashboard$).+}")
    public Map<String, Object> create(@PathVariable String resource, @Valid @RequestBody Map<String, Object> body) {
        return genericApiService.create(resource, body);
    }

    @PutMapping("/{resource:^(?!students|teachers|parents|attendance|exams|fees|notices|subjects|classes|sections|routine|syllabus|homework|assignments|menu-items|academics|dashboard$).+}/{resourceId}")
    public Map<String, Object> update(
            @PathVariable String resource,
            @PathVariable String resourceId,
            @Valid @RequestBody Map<String, Object> body
    ) {
        return genericApiService.update(resource, resourceId, body);
    }

    @DeleteMapping("/{resource:^(?!students|teachers|parents|attendance|exams|fees|notices|subjects|classes|sections|routine|syllabus|homework|assignments|menu-items|academics|dashboard$).+}/{resourceId}")
    public ResponseEntity<Void> delete(@PathVariable String resource, @PathVariable String resourceId) {
        genericApiService.delete(resource, resourceId);
        return ResponseEntity.noContent().build();
    }
}
