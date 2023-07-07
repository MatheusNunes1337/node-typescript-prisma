import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { GetProductByIdUseCaseImpl } from "../../../../src/app/products/useCases/getProductById/GetProductByIdUseCaseImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";
import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";

const sutFactory = (productRepository: ProductRepository) => {
    return new GetProductByIdUseCaseImpl(productRepository)
}

describe("Given the GetProductByIdUseCase", () => {
    let sut: GetProductByIdUseCaseImpl
    let productRepositoryMock: ProductRepository

    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory()
    })

    describe("when is provided a product ID that exists", () => {
        test("then it should return the product", async () => {
            const foundProduct = {id: 1, ...createRandomProductFixture()}
            productRepositoryMock.findById = jest.fn().
            mockResolvedValue(foundProduct)

            sut = sutFactory(productRepositoryMock)

            const result = await sut.execute(Math.random())

            expect(productRepositoryMock.findById).toHaveBeenCalledTimes(1)
            expect(result).toEqual(foundProduct)
            expect(result).toEqual({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                stock: expect.any(Number),
                price: expect.any(Number),
                coverImage: expect.any(String)
              })
        })
    })

    describe("when is provided a product ID that NOT exists", () => {
        test("then it should return null", async () => {
            productRepositoryMock.findById = jest.fn().
            mockResolvedValue(null)

            sut = sutFactory(productRepositoryMock)

            const result = await sut.execute(Math.random())

            expect(result).toEqual(null)
            expect(productRepositoryMock.findById).toHaveBeenCalledTimes(1)
        })
    })
})