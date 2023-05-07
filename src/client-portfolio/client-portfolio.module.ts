import { Module } from '@nestjs/common';
import { ClientPortfolioService } from './client-portfolio.service';
import { ClientPortfolioResolver } from './client-portfolio.resolver';

@Module({
  providers: [ClientPortfolioResolver, ClientPortfolioService]
})
export class ClientPortfolioModule {}
