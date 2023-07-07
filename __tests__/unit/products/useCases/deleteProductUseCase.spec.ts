import { NotFound } from "../../../../src/app/errors/NotFound";
import { ProductRepository } from "../../../../src/app/products/repositories/ProductRepository";
import { DeleteProductUseCaseImpl } from "../../../../src/app/products/useCases/DeleteProduct/DeleteProductUseCaseImpl";
import { productRepositoryMockFactory } from "../../../factories/products/productRepositoryMockFactory";

function sutFactory(productRepository: ProductRepository): DeleteProductUseCaseImpl {
    return new DeleteProductUseCaseImpl(productRepository);
}

describe("Given the DeleteProductUseCase", () => {
    let sut: DeleteProductUseCaseImpl
    let productRepositoryMock: ProductRepository;

    beforeAll(() => {
        productRepositoryMock = productRepositoryMockFactory();
    })

    describe("when a product ID that exists is provided", () => {
        test("then it should call delete method to delete the product", async () => {
            productRepositoryMock.findById = jest.fn().mockResolvedValue(true)
            sut = sutFactory(productRepositoryMock)

            await sut.execute(Math.random())
        
            expect(productRepositoryMock.delete).toHaveBeenCalled()
        })
    })

    describe("when a product ID that NOT exists is provided", () => {
        test("then it should throw a not found error", async () => {
            productRepositoryMock.findById = jest.fn().mockResolvedValue(false)
            sut = sutFactory(productRepositoryMock)

            await expect(sut.execute(Math.random())).rejects.toEqual(
                new NotFound('Product')
            )
        })
    })
})