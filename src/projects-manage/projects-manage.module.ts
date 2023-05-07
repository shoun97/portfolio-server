import { Module } from '@nestjs/common';
import { ProjectsManageService } from './projects-manage.service';
import { ProjectsManageResolver } from './projects-manage.resolver';

@Module({
  providers: [ProjectsManageResolver, ProjectsManageService]
})
export class ProjectsManageModule {}
