package com.School.Sms.service;

import com.School.Sms.dto.NoticeRequest;
import com.School.Sms.model.NoticeEntity;
import com.School.Sms.repository.NoticeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeService {

    private final NoticeRepository noticeRepository;

    public NoticeService(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    public List<NoticeEntity> findAll() {
        return noticeRepository.findAll();
    }

    public NoticeEntity create(NoticeRequest request) {
        NoticeEntity entity = new NoticeEntity(
                request.title(),
                request.audience(),
                request.status()
        );
        return noticeRepository.save(entity);
    }

    public NoticeEntity update(String title, NoticeRequest request) {
        if (!title.equals(request.title())) {
            noticeRepository.deleteById(title);
        }
        return create(request);
    }

    public void delete(String title) {
        noticeRepository.deleteById(title);
    }
}
