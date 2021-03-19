import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
 {path:"",pathMatch:"full",component:RentalComponent},
 {path:"cardetails",component:CardetailComponent},
 {path:"cardetails/brand/:brandid",component:CardetailComponent},
 {path:"cardetails/color/:colorid",component:CardetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
