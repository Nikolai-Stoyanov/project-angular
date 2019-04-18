import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RoleGuard } from 'src/app/core/guards/RoleGuard.guard';

const dogFoodRoutes:Route[]=[
    { path: '', component: ListComponent,canActivate: [RoleGuard] },
      { path: 'create', component: CreateComponent,canActivate: [RoleGuard]},
      { path: 'list', component: ListComponent,canActivate: [RoleGuard] },
      { path: 'purchase/:id', component: PurchaseComponent,canActivate: [AuthGuard]},
      { path: 'edit/:id', component: EditComponent,canActivate: [RoleGuard] },
      { path: 'details/:id', component: DetailsComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(dogFoodRoutes)
    ],
    exports:[
        RouterModule,
        
    ],
    providers: [
        RoleGuard,
      ]
})

export class DogFoodRoutingModule{}