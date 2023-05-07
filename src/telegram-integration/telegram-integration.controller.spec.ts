import { Test, TestingModule } from '@nestjs/testing';
import { TelegramIntegrationController } from './telegram-integration.controller';
import { TelegramIntegrationService } from './telegram-integration.service';

describe('TelegramIntegrationController', () => {
  let controller: TelegramIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelegramIntegrationController],
      providers: [TelegramIntegrationService],
    }).compile();

    controller = module.get<TelegramIntegrationController>(TelegramIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
