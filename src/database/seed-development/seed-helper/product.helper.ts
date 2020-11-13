import { from } from "rxjs";
import {Ecate} from '../../../common/enums/productCateogory.enum';
import {Categories} from '../../../categories/categories.entity';
import {Product} from '../../../products/product.entity';

export class ProductHelper {
    private _data : Product[];

    constructor (productcategory: Categories[]){
        this._data = this.getData(productcategory);
    }

    private getData(productcategory: Categories[]): any[]{
        let arrCate = [];
        productcategory.map(item => {
            if(item.name === Ecate.MEAT) {
                arrCate.push(item)
            }
        })
        return [
            Product.create({
                name: 'Cơm bà tâm',
                image: "",
                price: 500000,
                description: 'anh tam non',
                quantity: 20,
                category: arrCate
            })
        ];
    }
    public initProduct(): Promise<Product[]> {
        return Promise.all(this._data.map(product => product.save()));
      }
    }