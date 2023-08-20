import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForminfoComponent } from './component/forminfo/forminfo.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { ChartComponent } from './component/chart/chart.component';

const routes: Routes = [
  {path:"",component :LoginComponent},
  {path:"form",component :ForminfoComponent},
  {path:"table",component :PaginationComponent},
  {path:"dashbord",component :DashbordComponent},
  // {path:"chart",component :ChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
