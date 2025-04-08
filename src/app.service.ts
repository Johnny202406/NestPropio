import { Injectable } from '@nestjs/common';
import { Product } from './utils/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello jeferson World!';
  }
  getProducts():Product[]{
    const products: Product[]=[
      {
        id:1,
        name: "Producto1",
        description: "Descripcion de producto1",
        price:100,
        imageUrl:'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600',
        isOferta:true,
        porcentajeOfert:30,
        finalPrice: 70,
      },
      {
        id:2,
        name: "Producto1",
        description: "Descripcion de producto1",
        price:100,
        imageUrl:'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600',
        isOferta:true,
        porcentajeOfert:30,
        finalPrice: 70,
      },
    ];
return products;

}
}
