import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";
import { Conflict } from "../../../../src/app/errors/Conflict";
import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { CreateProductUseCaseImpl } from "../../../../src/app/products/useCases/CreateProduct/CreateProductServiceImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";

function sutFactory(productRepository: ProductRepository): CreateProductUseCaseImpl {
  return new CreateProductUseCaseImpl(productRepository);
}

describe("Given the CreateProductUseCase", () => {
    let sut: CreateProductUseCaseImpl;
    let productRepositoryMock: ProductRepository;

    beforeAll(() => {
      productRepositoryMock = productRepositoryMockFactory();
      sut = sutFactory(productRepositoryMock);
    });

    describe("when a product with correct body is provided", () => {
      test("then it should create and then return the new product", async () => {
        productRepositoryMock.create = jest.fn()
        .mockResolvedValue({id: 1, ...createRandomProductFixture()})

        productRepositoryMock.findByFilter = jest.fn()
        .mockResolvedValue([])
  
        sut = sutFactory(productRepositoryMock);
        const productInput = createRandomProductFixture()

        const result = await sut.execute(productInput)

        expect(result).toEqual({
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
          stock: expect.any(Number),
          price: expect.any(Number),
          coverImage: expect.any(String)
        })
      });
    })
  });