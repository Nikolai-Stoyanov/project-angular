import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/components/shared/models/Order';

const createOrder = 'http://localhost:9999/feed/order/create';
const getAllOrder = 'http://localhost:9999/feed/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, ) { }

  createOrder(data) {
    return this.http.post(createOrder, data);
  }

  getAllOrder(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(getAllOrder)
  }
}
