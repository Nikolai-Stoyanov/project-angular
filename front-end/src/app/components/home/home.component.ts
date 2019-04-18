import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { DogFood } from '../shared/models/Dog-Food';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { AuthService } from 'src/app/core/services/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  isAdmin;
  isLoggedIn;
  dogfoods$:Observable<Array<DogFood>>
  
  constructor(private dogFoodService:DogFoodService, public authService:AuthService) { }

  ngOnInit() {
    this.dogFoodService.getAllFood().subscribe(data=>{
      this.dogfoods$= data['dogfood']
    });
  }

  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
    this.isAdmin=this.authService.isAdmin();
  }

}
