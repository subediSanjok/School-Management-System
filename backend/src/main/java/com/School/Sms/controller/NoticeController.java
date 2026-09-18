package com.School.Sms.controller;

import com.School.Sms.dto.NoticeRequest;
import com.School.Sms.model.NoticeEntity;
import com.School.Sms.service.NoticeService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping
    public List<NoticeEntity> findAll() {
        return noticeService.findAll();
    }

    @PostMapping
    public NoticeEntity create(@Valid @RequestBody NoticeRequest request) {
        return noticeService.create(request);
    }

    @PutMapping("/{title}")
    public NoticeEntity update(@PathVariable String title, @Valid @RequestBody NoticeRequest request) {
        return noticeService.update(title, request);
    }

    @DeleteMapping("/{title}")
    public void delete(@PathVariable String title) {
        noticeService.delete(title);
    }
}
