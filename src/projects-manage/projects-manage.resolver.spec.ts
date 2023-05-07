import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsManageResolver } from './projects-manage.resolver';
import { ProjectsManageService } from './projects-manage.service';

describe('ProjectsManageResolver', () => {
  let resolver: ProjectsManageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsManageResolver, ProjectsManageService],
    }).compile();

    resolver = module.get<ProjectsManageResolver>(ProjectsManageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
