import { Module } from '@nestjs/common';
import { TelegramIntegrationService } from './telegram-integration.service';
import { TelegramIntegrationController } from './telegram-integration.controller';

@Module({
  controllers: [TelegramIntegrationController],
  providers: [TelegramIntegrationService]
})
export class TelegramIntegrationModule {}
