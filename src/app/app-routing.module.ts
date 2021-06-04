import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';


const routes: Routes = [
  {
    path:'chart',component:ChartComponent
  },
  {
    path:'chart2',component:DoughnutchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
