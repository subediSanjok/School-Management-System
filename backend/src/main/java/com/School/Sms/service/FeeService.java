package com.School.Sms.service;

import com.School.Sms.dto.FeeRequest;
import com.School.Sms.model.FeeEntity;
import com.School.Sms.repository.FeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeeService {

    private final FeeRepository feeRepository;

    public FeeService(FeeRepository feeRepository) {
        this.feeRepository = feeRepository;
    }

    public List<FeeEntity> findAll() {
        return feeRepository.findAll();
    }

    public FeeEntity create(FeeRequest request) {
        FeeEntity entity = new FeeEntity(
                request.feeType(),
                request.amount(),
                request.status()
        );
        return feeRepository.save(entity);
    }

    public FeeEntity update(String feeType, FeeRequest request) {
        if (!feeType.equals(request.feeType())) {
            feeRepository.deleteById(feeType);
        }
        return create(request);
    }

    public void delete(String feeType) {
        feeRepository.deleteById(feeType);
    }
}
