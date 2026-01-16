import { Component } from '@angular/core';
import { IAmazoneProduct } from '../../interfaces/iamazoneProducts';
import { amazonProducts } from '../../mock-data/amazonProduct';
import { CurrencyPipe, SlicePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-amazon-products',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    SlicePipe
  ],
  templateUrl: './amazon-products.component.html',
  styleUrl: './amazon-products.component.scss'
})
export class AmazonProductsComponent {

  allAmazoneProducts: IAmazoneProduct[] = amazonProducts;



}
