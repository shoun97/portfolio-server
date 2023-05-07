import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientPortfolioModule } from './client-portfolio/client-portfolio.module';
import { ProjectsManageModule } from './projects-manage/projects-manage.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TelegramIntegrationModule } from './telegram-integration/telegram-integration.module';

@Module({
  imports: [ClientPortfolioModule, ProjectsManageModule, NotificationsModule, TelegramIntegrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
