import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DogFoodService } from 'src/app/core/services/dog-food.sevices';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DogFoodRoutingModule } from './dog-food-routing.module';

@NgModule({
  declarations: [
    CreateComponent, 
    EditComponent, 
    DetailsComponent, 
    PurchaseComponent, 
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DogFoodRoutingModule
  ],
  exports:[
    CreateComponent, 
    EditComponent, 
    DetailsComponent, 
    PurchaseComponent, 
    ListComponent
  ],
  providers: [
    DogFoodService,
  ]
})
export class DogFoodModule { }
