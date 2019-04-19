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
  foodTypes: string[] = ["Canned Food", "Dry Food", "Veterinary Diets", "Treats"];
  age: string[] = ["Adult", "Puppy", "Senior"];
  form;
  dogfoods$: Observable<Array<DogFood>>
  id = this.route.snapshot.params['id'];

  constructor
  (
    private fb: FormBuilder, 
    private dogFoodService: DogFoodService, 
    private router: Router, 
    private route: ActivatedRoute, 
  ) {}

  ngOnInit() {
    this.getProduct();
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', [Validators.required, Validators.minLength(4)]],
      imageUrl: ['', [Validators.required]],
      foodType: ['', [Validators.required]],
      dogAge: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      size: ['', [Validators.required, Validators.min(0.1)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
    })
  }

  getProduct() {
    this.dogFoodService.getFood(this.id).subscribe(data=>{
      this.dogfoods$=data['dogfood'];
      this.form.setValue({
        title: this.dogfoods$["title"],
        brand: this.dogfoods$["brand"],
        imageUrl: this.dogfoods$["imageUrl"],
        foodType: this.dogfoods$["foodType"],
        dogAge: this.dogfoods$["dogAge"],
        description: this.dogfoods$["description"],
        price: this.dogfoods$["price"],
        size: this.dogfoods$["size"],
      })
    })
  }

  editFood(){
        this.dogFoodService.editFood(this.form.value, this.id).subscribe((data) => {
          this.router.navigate(['./dogFood/list'])
        })
      }

  get f(){
        return this.form.controls
      }
}
