import { Injectable } from '@nestjs/common';
import { CreateClientPortfolioInput } from './dto/create-client-portfolio.input';
import { UpdateClientPortfolioInput } from './dto/update-client-portfolio.input';

@Injectable()
export class ClientPortfolioService {
  create(createClientPortfolioInput: CreateClientPortfolioInput) {
    return 'This action adds a new clientPortfolio';
  }

  findAll() {
    return `This action returns all clientPortfolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientPortfolio`;
  }

  update(id: number, updateClientPortfolioInput: UpdateClientPortfolioInput) {
    return `This action updates a #${id} clientPortfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientPortfolio`;
  }
}
