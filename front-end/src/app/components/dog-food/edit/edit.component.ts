import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { Router, ActivatedRoute } from '@angular/router';
import { DogFood } from '../../shared/models/Dog-Food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  foodTypes:string[]=["Canned Food","Dry Food","Veterinary Diets","Treats"];
  age:string[]=["Adult","Puppy","Senior"];
  form;
  food:DogFood;
  dogfoods$:Observable<Array<DogFood>>
  id = this.route.snapshot.params['id'];
  constructor(private fb: FormBuilder, private dogFoodService:DogFoodService, private router:Router,private route: ActivatedRoute,) { 
    
    this.dogFoodService.getAllFood().subscribe((data)=>{
      this.dogfoods$=data['dogfood'].filter(f => f._id === this.id)[0];
      this.form.value["title"]=this.dogfoods$["title"]
      this.form.value["brand"]=this.dogfoods$["brand"]
      this.form.value["imageUrl"]=this.dogfoods$["imageUrl"]
      this.form.value["foodType"]=this.dogfoods$["foodType"]
      this.form.value["dogAge"]=this.dogfoods$["dogAge"]
      this.form.value["description"]=this.dogfoods$["description"]
      this.form.value["price"]=this.dogfoods$["price"]
      this.form.value["size"]=this.dogfoods$["size"]
      console.log(this.form)
    })
  }

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

  editFood(){
    this.dogFoodService.editFood(this.form.value,this.id).subscribe((data)=>{
      this.router.navigate(['./dogFood/list'])
    })
  }

  get f(){
    return this.form.controls
  }

  // get invalid(){
  //   return this.form.invalid
  // }

}
