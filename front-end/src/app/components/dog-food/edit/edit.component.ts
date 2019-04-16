import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { Router, ActivatedRoute } from '@angular/router';
import { DogFood } from '../../shared/models/Dog-Food';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  foodTypes:string[]=["Canned Food","Dry Food","Veterinary Diets","Treats"];
  default: string = '';
  age:string[]=["Adult","Puppy","Senior"];
  form;
  dogFood:DogFood
  constructor(private fb: FormBuilder, private dogFoodService:DogFoodService, private router:Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(this)
    this.dogFoodService.getFood(id)
      .subscribe((data) => {
        this.dogFood = data;
        console.log(data)
      });
  }

}
