import { faker } from '@faker-js/faker';
import { CreateProductDTO } from "../../src/app/products/dto/CreateProductDto";


export const createRandomProductFixture = () : any => {
    return {
      'name': faker.word.noun(),
      description: faker.lorem.sentence(),
      price: faker.number.float(),
      stock: faker.number.int(),
      coverImage: faker.internet.avatar()
    }
}

/*
export const generateProductsFixture = (quantity: number): Array<CreateProductDTO> => {
    const products: Array<CreateProductDTO> = faker.helpers.multiple(
      createRandomProduct,
      {count: quantity}
    )

    return products
}
*/