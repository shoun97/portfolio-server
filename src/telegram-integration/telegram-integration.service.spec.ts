import { Test, TestingModule } from '@nestjs/testing';
import { TelegramIntegrationService } from './telegram-integration.service';

describe('TelegramIntegrationService', () => {
  let service: TelegramIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelegramIntegrationService],
    }).compile();

    service = module.get<TelegramIntegrationService>(TelegramIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
