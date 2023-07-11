import { prismaMock } from '../../../../singleton';
//import { FilterProductsDTO } from '../dto/FilterProductsDto';
//import { UpdateProductDTO } from '../dto/UpdateProductDto';
import { ProductRepository } from '../../../../src/app/products/repositories';
import { createRandomProductFixture } from '../../../../fixtures/products/productFixtures'

const makeSut = () => {
  const productRepository = new ProductRepository(prismaMock)
  return productRepository
}

describe('Given the Product Repository', () => {
  let productRepository: ProductRepository;

  describe('when the created method is called with correct params', () => {
    test('then it should create a new product', async () => {
     
      const productInput = createRandomProductFixture()
      const createdProduct = {id: Math.random(), ...productInput}
      prismaMock.product.create.mockResolvedValue(createdProduct)
    
      const sut = makeSut()
      const result = await sut.create(productInput);

      expect(result).toBeDefined();
      expect(result).toEqual(createdProduct)
    });
  });

  describe('when the findAll method is called', () => {
    test('then it should return all products', async () => {
     
      const foundProducts = [{id: Math.random(), ...createRandomProductFixture()}]
      prismaMock.product.findMany.mockResolvedValue(foundProducts)
    
      const sut = makeSut()
      const result = await sut.findAll();

      expect(result).toBeDefined();
      expect(Array.isArray(foundProducts)).toBeTruthy()
      expect(result).toEqual(foundProducts)
    });
  });

  describe('when the findById method is called', () => {
    test('then it should return the product', async () => {
     
      const foundProduct = {id: Math.random(), ...createRandomProductFixture()}
      prismaMock.product.findUnique.mockResolvedValue(foundProduct)
    
      const sut = makeSut()
      const result = await sut.findById(Math.random());

      expect(result).toBeDefined();
      expect(result).toEqual(foundProduct)
    });
  });

  describe('when the findByFilter method is called', () => {
    test('then it should return filtered products', async () => {
     
      const foundProducts = [{id: Math.random(), ...createRandomProductFixture()}]
      prismaMock.product.findMany.mockResolvedValue(foundProducts)
    
      const sut = makeSut()
      const result = await sut.findByFilter({name: foundProducts[0].name});

      expect(result).toBeDefined();
      expect(Array.isArray(foundProducts)).toBeTruthy()
      expect(result).toEqual(foundProducts)
    });
  });

  describe('when the update method is called', () => {
    test('then it should update a product', async () => {
     
      const updatedProduct = {id: Math.random(), ...createRandomProductFixture()}
      prismaMock.product.update.mockResolvedValue(updatedProduct)
    
      const sut = makeSut()
      const productInput = createRandomProductFixture()
      const result = await sut.update(productInput, Math.random());

      expect(result).toBeDefined();
      expect(result).toEqual(updatedProduct)
    });
  });

  describe('when the delete method is called', () => {
    test('then it should delete a product', async () => {
     
      prismaMock.product.delete.mockResolvedValue 
    
      const sut = makeSut()

      await expect(sut.delete(Math.random())).not.toThrowError()
    });
  });

});
