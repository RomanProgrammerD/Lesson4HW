import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { IDeleteProduct } from './interfaces/delete.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    addProduct(@Body() createProduct: CreateProductDto): Promise<IProduct>{
        return this.productService.add(createProduct);
    }

    @Get()
    getProducts(): Promise<IProduct[]>{
        return this.productService.get();
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() updateProductDto: CreateProductDto): Promise<IProduct>{
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string):Promise<IProduct>{
        return this.productService.delete(id);
    }
}
