import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientPortfolioService } from './client-portfolio.service';
import { ClientPortfolio } from './entities/client-portfolio.entity';
import { CreateClientPortfolioInput } from './dto/create-client-portfolio.input';
import { UpdateClientPortfolioInput } from './dto/update-client-portfolio.input';

@Resolver(() => ClientPortfolio)
export class ClientPortfolioResolver {
  constructor(private readonly clientPortfolioService: ClientPortfolioService) {}

  @Mutation(() => ClientPortfolio)
  createClientPortfolio(@Args('createClientPortfolioInput') createClientPortfolioInput: CreateClientPortfolioInput) {
    return this.clientPortfolioService.create(createClientPortfolioInput);
  }

  @Query(() => [ClientPortfolio], { name: 'clientPortfolio' })
  findAll() {
    return this.clientPortfolioService.findAll();
  }

  @Query(() => ClientPortfolio, { name: 'clientPortfolio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clientPortfolioService.findOne(id);
  }

  @Mutation(() => ClientPortfolio)
  updateClientPortfolio(@Args('updateClientPortfolioInput') updateClientPortfolioInput: UpdateClientPortfolioInput) {
    return this.clientPortfolioService.update(updateClientPortfolioInput.id, updateClientPortfolioInput);
  }

  @Mutation(() => ClientPortfolio)
  removeClientPortfolio(@Args('id', { type: () => Int }) id: number) {
    return this.clientPortfolioService.remove(id);
  }
}
