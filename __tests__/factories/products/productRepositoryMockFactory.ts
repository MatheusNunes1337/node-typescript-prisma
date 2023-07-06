import { ProductRepository } from "../../../src/app/products/repositories/ProductRepository";

export function productRepositoryMockFactory(): ProductRepository {
  const productRepositoryMock: ProductRepository = {
    create: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    findByFilter: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  return productRepositoryMock;
}
