import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogFood } from '../shared/models/Dog-Food';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dogfoods$:Observable<Array<DogFood>>
  
  constructor(private dogFoodService:DogFoodService) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.dogfoods$= this.dogFoodService.getAllFood();
    // },3000)
    this.dogfoods$= this.dogFoodService.getAllFood();
    
  }

}
