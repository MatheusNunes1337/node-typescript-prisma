import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { UpdateProductUseCaseImpl } from "../../../../src/app/products/useCases/UpdateProduct/UpdateProductUseCaseImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";
import { createRandomProductFixture } from "../../../../fixtures/products/productFixtures";
import { NotFound } from "../../../../src/app/errors/NotFound";
import { Conflict } from "../../../../src/app/errors/Conflict";

const makeSut = (productRepository: ProductRepository): UpdateProductUseCaseImpl  => {
    return new UpdateProductUseCaseImpl(productRepository)
}

describe("Given the UpdateProductUseCase", () => {
    let sut: UpdateProductUseCaseImpl
    let productRepositoryMock: ProductRepository
    
    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory()
    })

    describe("when is provided a product ID that exists", () => {
        describe("and also a product name that NOT exists yet", () =>{
            test("then it should update the product", async() => {
                const updatedProduct = {id: 2, ...createRandomProductFixture()}

                productRepositoryMock.findById = jest.fn()
                .mockResolvedValue(updatedProduct)
    
                productRepositoryMock.update = jest.fn()
                .mockResolvedValue(updatedProduct)

                productRepositoryMock.findByFilter = jest.fn()
                .mockResolvedValue([])
    
                sut = makeSut(productRepositoryMock)
    
                const productInput = createRandomProductFixture()
                const result = await sut
                .execute(productInput, Math.random())
    
                expect(result).toEqual(updatedProduct)
                expect(productRepositoryMock.findById)
                .toHaveBeenCalledTimes(1)
                expect(productRepositoryMock.update).toHaveBeenCalledTimes(1)
            })
        })

        describe("and also a product name that already exists", () =>{
            test("then it should throw a conflict error", async() => {
                productRepositoryMock.findByFilter = jest.fn()
                .mockResolvedValue([{id: 1, ...createRandomProductFixture()}])

                const foundProduct = {id: 2, ...createRandomProductFixture()}
                productRepositoryMock.findById = jest.fn()
                .mockResolvedValue(foundProduct)
    
                sut = makeSut(productRepositoryMock)
    
                const productInput = createRandomProductFixture()
                
                await expect(sut.execute(productInput, Math.random()))
                .rejects.toEqual(
                    new Conflict(`The product ${productInput.name} already exists`)
                )
                expect(productRepositoryMock.findById)
                .toHaveBeenCalledTimes(1)
                expect(productRepositoryMock.findByFilter).toHaveBeenCalledTimes(1)
            })
        })
    })

    describe("when is provided a product ID that NOT exists", () => {
        test("then it should throw a not found error", async() => {
            productRepositoryMock.findById = jest.fn()
            .mockResolvedValue(false)

            sut = makeSut(productRepositoryMock)

            const productInput = createRandomProductFixture()
            await expect(sut.execute(productInput, Math.random()))
            .rejects.toEqual(new NotFound('Product'))
            expect(productRepositoryMock.findById)
            .toHaveBeenCalledTimes(1)
        })
    })
})