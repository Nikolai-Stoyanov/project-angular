import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogFood } from '../../shared/models/Dog-Food';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { AuthService } from 'src/app/core/services/auth.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dogfoods$:Observable<Array<DogFood>>
  isAdmin;
  isLoggedIn;
  
  constructor(private dogFoodService:DogFoodService, private authService:AuthService) { }

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
