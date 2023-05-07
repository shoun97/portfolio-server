import { Injectable } from '@nestjs/common';
import { CreateProjectsManageInput } from './dto/create-projects-manage.input';
import { UpdateProjectsManageInput } from './dto/update-projects-manage.input';

@Injectable()
export class ProjectsManageService {
  create(createProjectsManageInput: CreateProjectsManageInput) {
    return 'This action adds a new projectsManage';
  }

  findAll() {
    return `This action returns all projectsManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectsManage`;
  }

  update(id: number, updateProjectsManageInput: UpdateProjectsManageInput) {
    return `This action updates a #${id} projectsManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectsManage`;
  }
}
