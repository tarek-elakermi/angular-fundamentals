import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'searchInput',
  standalone: true,
  pure: false,
})
export class SearchInputPipe implements PipeTransform {

  transform(products: IProduct[], searchValue:string): IProduct[] {
    return products.filter(
      (product) => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
