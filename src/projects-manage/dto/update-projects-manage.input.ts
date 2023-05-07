import { CreateProjectsManageInput } from './create-projects-manage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectsManageInput extends PartialType(CreateProjectsManageInput) {
  @Field(() => Int)
  id: number;
}
