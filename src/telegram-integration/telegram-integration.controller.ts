import { Controller } from '@nestjs/common';
import { TelegramIntegrationService } from './telegram-integration.service';

@Controller()
export class TelegramIntegrationController {
  constructor(private readonly telegramIntegrationService: TelegramIntegrationService) {}
}
