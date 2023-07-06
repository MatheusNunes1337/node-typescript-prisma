import faker from 'faker';
import { CreateProductDTO } from "../../src/app/products/dto/CreateProductDto";


export const generateProductFixture = () : CreateProductDTO => {
    const product = new CreateProductDTO();
  
    product.name = faker.random.words(faker.datatype.number({ min: 1, max: 3 }));
    product.description = faker.lorem.sentence();
    product.price = faker.datatype.float({ min: 0, max: 100 });
    product.stock = faker.datatype.number({ min: 0, max: 1000 });
    product.coverImage = faker.image.imageUrl();
  
    return product;
  }