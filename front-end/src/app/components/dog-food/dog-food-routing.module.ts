import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const dogFoodRoutes:Route[]=[
    { path: '', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'details/:id', component: DetailsComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(dogFoodRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class DogFoodRoutingModule{}