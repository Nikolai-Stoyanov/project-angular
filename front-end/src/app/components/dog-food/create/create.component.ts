import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  foodTypes:string[]=["Canned Food","Dry Food","Veterinary Diets","Treats"];
  default: string = '';
  age:string[]=["Adult","Puppy","Senior"];
  form;
  constructor(private fb: FormBuilder, private dogFoodService:DogFoodService, private router:Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required]],
      foodType: ['', [Validators.required]],
      dogAge: ['', [Validators.required]],
      description: ['', [Validators.required,Validators.minLength(15)]],
      size: ['', [Validators.required, Validators.min(0.1)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
    })
  }

  createFood(){
    this.dogFoodService.createFood(this.form.value).subscribe((data)=>{
        this.router.navigate(['/'])
    })
  }

  get f(){
    return this.form.controls
  }

  get invalid(){
    return this.form.invalid
  }

}
