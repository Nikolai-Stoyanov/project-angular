import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [CreateComponent, EditComponent, DetailsComponent, PurchaseComponent],
  imports: [
    CommonModule
  ]
})
export class DogFoodModule { }
