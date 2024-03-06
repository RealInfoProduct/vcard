import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavitemComponent } from './navitem/navitem.component';

const routes: Routes = [
  {path:'',component:NavitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
