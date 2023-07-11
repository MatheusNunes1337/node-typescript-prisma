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

  /*
  describe('findAll', () => {
    it('should return an array of products', async () => {
      // Chame o método findAll do repositório
      const products = await productRepository.findAll();

      // Faça asserções para verificar se a resposta é um array de produtos
      expect(Array.isArray(products)).toBe(true);
      // ... faça mais asserções de acordo com a lógica do seu código
    });
    
  });
  */

  // Adicione testes para os demais métodos do repositório (findByFilter, findById, update, delete)
});
