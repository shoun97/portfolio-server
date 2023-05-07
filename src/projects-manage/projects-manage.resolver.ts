import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectsManageService } from './projects-manage.service';
import { ProjectsManage } from './entities/projects-manage.entity';
import { CreateProjectsManageInput } from './dto/create-projects-manage.input';
import { UpdateProjectsManageInput } from './dto/update-projects-manage.input';

@Resolver(() => ProjectsManage)
export class ProjectsManageResolver {
  constructor(private readonly projectsManageService: ProjectsManageService) {}

  @Mutation(() => ProjectsManage)
  createProjectsManage(@Args('createProjectsManageInput') createProjectsManageInput: CreateProjectsManageInput) {
    return this.projectsManageService.create(createProjectsManageInput);
  }

  @Query(() => [ProjectsManage], { name: 'projectsManage' })
  findAll() {
    return this.projectsManageService.findAll();
  }

  @Query(() => ProjectsManage, { name: 'projectsManage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectsManageService.findOne(id);
  }

  @Mutation(() => ProjectsManage)
  updateProjectsManage(@Args('updateProjectsManageInput') updateProjectsManageInput: UpdateProjectsManageInput) {
    return this.projectsManageService.update(updateProjectsManageInput.id, updateProjectsManageInput);
  }

  @Mutation(() => ProjectsManage)
  removeProjectsManage(@Args('id', { type: () => Int }) id: number) {
    return this.projectsManageService.remove(id);
  }
}
