import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  producData: any;
  protected title = 'angular-part11';

  constructor(private productService: Products) {}
  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      this.producData = data.products;
    });
  }
}
