import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { DogFood } from '../../shared/models/Dog-Food';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { AuthService } from 'src/app/core/services/auth.services';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.services';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  dogfoods$:Observable<DogFood>
  quantities;
  
  constructor(
    private dogFoodService:DogFoodService,
    private orderService:OrderService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dogFoodService.getAllFood().subscribe(data=>{
      this.dogfoods$= data['dogfood'].filter(f => f._id === id)[0]
    });
  }

  purchase(){
    const data = {
      creator: localStorage.getItem('userId'),
      date: Date.now,
      product: this.dogfoods$['title'],
      quantity: this.quantities,
      price: this.dogfoods$['price'],
      finalPrice: this.dogfoods$['price'] * this.quantities,
  }
    this.orderService.createOrder(data).subscribe((data)=>{
      this.router.navigate(['../order'])
    })
  }

  getQuantity(event){
    this.quantities=event.target.value
  }
}
