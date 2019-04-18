import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogFood } from '../../shared/models/Dog-Food';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { AuthService } from 'src/app/core/services/auth.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dogfoods$:Observable<DogFood>
  isAdmin;
  isLoggedIn;
  
  constructor(
    private dogFoodService:DogFoodService,
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.isAdmin=localStorage.getItem('isAdmin');
    this.dogFoodService.getAllFood().subscribe(data=>{
      this.dogfoods$= data['dogfood'].filter(f => f._id === id)[0]
    });
  }

  deleteFood(id){
    this.dogFoodService.deleteFood(id).subscribe(() => {
      this.router.navigate(['./dogFood/list']);
    })
  }

  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
    this.isAdmin=this.authService.isAdmin();
  }

}
