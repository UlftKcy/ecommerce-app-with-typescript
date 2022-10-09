import { instance } from "./service";

class ProductService{
    getProducts(){
        return instance.get("/products");
    }
}

export default new ProductService();