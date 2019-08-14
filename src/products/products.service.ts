import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel) {}

    async add(product: IProduct): Promise<IProduct>{
        const newProduct = this.productModel(product);
        return await newProduct.save();
    }

    async get(): Promise<IProduct[]>{
        const product = await this.productModel.find();
        return product;
    }

    async update(id: string, product: IProduct): Promise<IProduct>{
        return await this.productModel.findByIdAndUpdate(id, product, { new: true });
    }

    async delete(id: string): Promise<IProduct>{
        return await this.productModel.findByIdAndDelete(id);
    }
}
