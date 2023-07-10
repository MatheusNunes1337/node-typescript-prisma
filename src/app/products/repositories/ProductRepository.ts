import { Product, PrismaClient } from '@prisma/client';
import { CreateProductDTO } from '../dto/CreateProductDto';
import {IProductRepository} from './IProductRepository'
import { FilterProductsDTO } from '../dto/FilterProductsDto';
import { UpdateProductDTO } from '../dto/UpdateProductDto';

export class ProductRepository implements IProductRepository {
    constructor(private readonly prismaClient: PrismaClient) {}
    
    async create(productInput: CreateProductDTO): Promise<Product> {
        const insertedProduct = await this.prismaClient.product.create({
            data: {...productInput}
        })

        this.prismaClient.$disconnect()
        return insertedProduct
    }

    async findAll(): Promise<Array<Product> | []> {
        const products = await this.prismaClient.product.findMany()
        this.prismaClient.$disconnect()
        return products
    }

    async findByFilter(filter?: FilterProductsDTO): Promise<Array<Product> | []> {
        const products = await this.prismaClient.product.findMany({where: filter})
        this.prismaClient.$disconnect()
        return products
    }

    async findById(id: number): Promise<Product | null> {
        const product = await this.prismaClient.product.findUnique({where: { id }})
        this.prismaClient.$disconnect()
        return product
    }

    async update(productInput: UpdateProductDTO, id: number): Promise<Product> {
        const updatedProduct = await this.prismaClient.product.update({
            where: { id },
            data: productInput
        })

        this.prismaClient.$disconnect()
        return updatedProduct
    }

    async delete(id: number): Promise<void> {
        await this.prismaClient.product.delete({where: { id }})
        this.prismaClient.$disconnect()
    }
}