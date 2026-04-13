import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('Product service....');
  }

  getProductData() {
    return [
      { name: 'abc', brand: 'samsung', price: '20000' },
      { name: 'def', brand: 'dell', price: '33000' },
      { name: 'hij', brand: 'samsung', price: '10000' },
    ];
  }
}
