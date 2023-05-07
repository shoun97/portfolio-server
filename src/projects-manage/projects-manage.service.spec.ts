import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsManageService } from './projects-manage.service';

describe('ProjectsManageService', () => {
  let service: ProjectsManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsManageService],
    }).compile();

    service = module.get<ProjectsManageService>(ProjectsManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
