import { Test, TestingModule } from '@nestjs/testing';
import { ClientPortfolioResolver } from './client-portfolio.resolver';
import { ClientPortfolioService } from './client-portfolio.service';

describe('ClientPortfolioResolver', () => {
  let resolver: ClientPortfolioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientPortfolioResolver, ClientPortfolioService],
    }).compile();

    resolver = module.get<ClientPortfolioResolver>(ClientPortfolioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
