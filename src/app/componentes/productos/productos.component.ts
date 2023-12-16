import { Component } from '@angular/core';
import { ProductoService } from '../servicios/servicios.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  lista : DTOProducto[] = [];
  constructor(private pService: ProductoService){
    this.pService.GetProducts().subscribe(result => {
      console.log(result);
      this.lista = result.products;
    });
  }
}

export interface DTOProducto {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}
