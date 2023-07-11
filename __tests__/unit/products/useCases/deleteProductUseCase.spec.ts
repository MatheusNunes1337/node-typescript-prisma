import { NotFound } from "../../../../src/app/errors/NotFound";
import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { DeleteProductUseCase } from "../../../../src/app/products/useCases";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";

function makeSut(productRepository: ProductRepository): DeleteProductUseCase {
    return new DeleteProductUseCase(productRepository);
}

describe("Given the DeleteProductUseCase", () => {
    let sut: DeleteProductUseCase
    let productRepositoryMock: any;

    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory();
    })

    describe("when a product ID that exists is provided", () => {
        test("then it should call delete method to delete the product", async () => {
            productRepositoryMock.findById = jest.fn().mockResolvedValue(true)
            sut = makeSut(productRepositoryMock)

            await sut.execute(Math.random())
        
            expect(productRepositoryMock.delete).toHaveBeenCalled()
        })
    })

    describe("when a product ID that NOT exists is provided", () => {
        test("then it should throw a not found error", async () => {
            productRepositoryMock.findById = jest.fn().mockResolvedValue(false)
            sut = makeSut(productRepositoryMock)

            await expect(sut.execute(Math.random())).rejects.toEqual(
                new NotFound('Product')
            )
        })
    })
})