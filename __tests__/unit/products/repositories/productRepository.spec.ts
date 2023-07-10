import { PrismaClient, Product } from '@prisma/client';
/*import { CreateProductDTO } from '../dto/CreateProductDto';
import { FilterProductsDTO } from '../dto/FilterProductsDto';
import { UpdateProductDTO } from '../dto/UpdateProductDto';
import { ProductRepositoryImpl } from './ProductRepositoryImpl';*/

describe('ProductRepositoryImpl', () => {
  let prismaClient: PrismaClient;
  let productRepository: ProductRepositoryImpl;

  beforeAll(() => {
    prismaClient = new PrismaClient();
    productRepository = new ProductRepositoryImpl(prismaClient);
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  describe('create', () => {
    it('should create a new product', async () => {
      // Crie um objeto mock para o productInput
      const productInput: CreateProductDTO = {
        // ... defina os campos necessários para o teste
      };

      // Chame o método create do repositório
      const createdProduct = await productRepository.create(productInput);

      // Faça asserções para verificar se o produto foi criado corretamente
      expect(createdProduct).toBeDefined();
      // ... faça mais asserções de acordo com a lógica do seu código
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      // Chame o método findAll do repositório
      const products = await productRepository.findAll();

      // Faça asserções para verificar se a resposta é um array de produtos
      expect(Array.isArray(products)).toBe(true);
      // ... faça mais asserções de acordo com a lógica do seu código
    });
  });

  // Adicione testes para os demais métodos do repositório (findByFilter, findById, update, delete)
});
