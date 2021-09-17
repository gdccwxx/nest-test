import { Test, TestingModule } from '@nestjs/testing';
import { SensitiveService } from './sensitive.service';

describe('SensitiveService', () => {
  let service: SensitiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensitiveService],
    }).compile();

    service = module.get<SensitiveService>(SensitiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
