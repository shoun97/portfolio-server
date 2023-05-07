import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ClientPortfolio {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
