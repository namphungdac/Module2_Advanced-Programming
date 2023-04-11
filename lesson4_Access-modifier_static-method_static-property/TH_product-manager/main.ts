import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product("lenovo", 52000);
let mobiPhone = new Product("huawei", 25000);

ProductManager.addProduct(laptop);
ProductManager.addProduct(mobiPhone);

console.log(ProductManager.getProductList());