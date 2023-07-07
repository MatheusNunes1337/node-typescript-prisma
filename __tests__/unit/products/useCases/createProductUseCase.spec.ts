import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";
import { Conflict } from "../../../../src/app/errors/Conflict";
import { CreateProductDTO } from "../../../../src/app/products/dto/CreateProductDto";
import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { CreateProductUseCaseImpl } from "../../../../src/app/products/useCases/CreateProduct/CreateProductServiceImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";

function sutFactory(productRepository: ProductRepository): CreateProductUseCaseImpl {
  return new CreateProductUseCaseImpl(productRepository);
}

describe("Given the CreateProductUseCase", () => {
    let sut: CreateProductUseCaseImpl;
    let productRepositoryMock: ProductRepository;
    let productInput: CreateProductDTO

    beforeAll(() => {
      productRepositoryMock = productRepositoryMockFactory();
      productInput = createRandomProductFixture()
    });

    describe("when a product with correct body is provided", () => {
      test("then it should create and then return the new product", async () => {
        productRepositoryMock.create = jest.fn()
        .mockResolvedValue({id: 1, ...createRandomProductFixture()})

        productRepositoryMock.findByFilter = jest.fn()
        .mockResolvedValue([])
  
        sut = sutFactory(productRepositoryMock);

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

    describe("when is provided a product with a name that is already in use", () => {
      test("then it should throw a conflict error", async() => {
        productRepositoryMock.findByFilter = jest.fn()
        .mockResolvedValue([createRandomProductFixture()])

        sut = sutFactory(productRepositoryMock)

        await expect(sut.execute(productInput)).rejects.toEqual(
          new Conflict(`The product ${productInput.name} already exists`)
        )
      })
    })
  });