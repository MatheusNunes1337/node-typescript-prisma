import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { PutProductOnSaleUseCase } from "../../../../src/app/products/useCases";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";
import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";
import { NotFound } from "../../../../src/app/errors/NotFound";

const makeSut = (productRepository: ProductRepository): PutProductOnSaleUseCase  => {
    return new PutProductOnSaleUseCase(productRepository)
}

describe("Given the PutProductOnSaleUseCase", () => {
    let sut: PutProductOnSaleUseCase
    let productRepositoryMock: any
    
    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory()
    })

    describe("when is provided a product ID that exists", () => {
        test("it should put the product on sale and return it", async() => {
            productRepositoryMock.findById = jest.fn()
            .mockResolvedValue(true)

            const updatedProduct = {id: 2, ...createRandomProductFixture()}
            productRepositoryMock.update = jest.fn()
            .mockResolvedValue(updatedProduct)

            sut = makeSut(productRepositoryMock)

            const result = await sut
            .execute(Math.random(), Math.random())

            expect(result).toEqual(updatedProduct)
            expect(productRepositoryMock.findById)
            .toHaveBeenCalledTimes(1)
            expect(productRepositoryMock.update).toHaveBeenCalledTimes(1)
        })

        test("it call the applyDiscount and return the updated price", async() => {
            sut = makeSut(productRepositoryMock)

            const result = sut.applyDiscount(10, 200)

            expect(result).toEqual(expect.any(Number))
            expect(result).toBe(180)
        })
    })

    describe("when is provided a product ID that NOT exists", () => {
        test("it should throw a not found error", async() => {
            productRepositoryMock.findById = jest.fn()
            .mockResolvedValue(false)

            productRepositoryMock.update = jest.fn()

            sut = makeSut(productRepositoryMock)

            await expect(sut.execute(Math.random(), Math.random()))
            .rejects.toEqual(new NotFound('Product'))
            expect(productRepositoryMock.findById)
            .toHaveBeenCalledTimes(1)
        })
    })
})