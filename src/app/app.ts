import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part11';

  constructor(private productService: Products) {}
  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => { 
      
    });
  }
}
