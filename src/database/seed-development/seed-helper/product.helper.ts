import { from } from "rxjs";
import {Ecate} from '../../../common/enums/productCateogory.enum';
import {productCategories} from '../../../products-categories/products-categories.entity';
import {Product} from '../../../products/product.entity';

export class ProductHelper {
    private _data : Product[];

    constructor (productcategory: productCategories[]){
        this._data = this.getData(productcategory);
    }

    private getData(productcategory: productCategories[]): any[]{
        return[
            Product.create(
                {
                    name: 'cơm tấm bà nhi',
                    image: '',
                    price: '25000',
                    description: 'ngon bổ rẻ',
                    quantity: '50',
                    productcategory : productcategory.find(item => item.name === Ecate.FRIEDFOOD),
                    
                }
            ),
        ];
    }
    public initProduct(): Promise<Product[]> {
        return Promise.all(this._data.map(product => product.save()));
      }
    }
