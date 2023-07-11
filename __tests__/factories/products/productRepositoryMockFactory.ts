import { ProductRepository, IProductRepository } from "../../../src/app/products/repositories";

export function productRepositoryMockFactory(): IProductRepository {
  const productRepositoryMock: IProductRepository = {
    create: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    findByFilter: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  return productRepositoryMock;
}
