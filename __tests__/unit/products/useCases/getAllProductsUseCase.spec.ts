import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { GetAllProductsUseCaseImpl } from "../../../../src/app/products/useCases/getAllProducts/GetAllProductsUseCaseImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";
import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";
import { Product } from "@prisma/client";

const makeSut = (productRepository: ProductRepository) => {
    return new GetAllProductsUseCaseImpl(productRepository)
}


describe("Given the GetAllProductsUseCase", () => {
    let sut: GetAllProductsUseCaseImpl
    let productRepositoryMock: ProductRepository
    let foundProducts: Array<any>

    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory()
        foundProducts = [{id: 1, ...createRandomProductFixture()}]
    })

    describe("when a filter is provided", () => {
        test("then it should return the product", async () => {
            productRepositoryMock.findByFilter = jest.fn().
            mockResolvedValue(foundProducts)

            sut = makeSut(productRepositoryMock)

            const result = await sut.execute({name: foundProducts[0].name})

            expect(productRepositoryMock.findByFilter).toHaveBeenCalledTimes(1)
            expect(result).toEqual(foundProducts)
            expect(result.length).toBe(foundProducts.length)
            
        })
    })

    describe("when is NOT provide a filter", () => {
        test("then it should return all products", async () => {
            productRepositoryMock.findAll = jest.fn().
            mockResolvedValue(foundProducts)

            sut = makeSut(productRepositoryMock)

            const result = await sut.execute()

            expect(productRepositoryMock.findAll).toHaveBeenCalledTimes(1)
            expect(result).toEqual(foundProducts)
            expect(result.length).toBe(foundProducts.length)
        })
    })
})