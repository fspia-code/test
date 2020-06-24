import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockviewComponent } from './stockview/stockview.component';
import { StocklistComponent } from './stockview/stocklist/stocklist.component';
import { StockbodyComponent } from './stockview/stockbody/stockbody.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  
 },
 {
  path: 'stockview',
  component: StockviewComponent,
  children: [
    {
      path: 'stocklist',
      component: StocklistComponent
    } ,
    {
      path: 'stockbody',
      component: StockbodyComponent
    },
  ]},
//  {
//     path: 'login',
//     component: LoginComponent,
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
