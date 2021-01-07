import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/common';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
      imports: [HttpModule],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('ApiService - should be defined', () => {
    expect(service).toBeDefined();
  });
});
