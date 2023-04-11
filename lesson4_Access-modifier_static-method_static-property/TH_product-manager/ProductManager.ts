import {Product} from "./Product";

export class ProductManager {
    static productList:Product[] = [];
    constructor() {
    };
    static addProduct(product:Product) {
        this.productList.push(product);
    }
    static getProductList():Product[] {
        return this.productList;
    }
}