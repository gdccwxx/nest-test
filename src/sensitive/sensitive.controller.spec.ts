import { Test, TestingModule } from '@nestjs/testing';
import { SensitiveController } from './sensitive.controller';

describe('SensitiveController', () => {
  let controller: SensitiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensitiveController],
    }).compile();

    controller = module.get<SensitiveController>(SensitiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
