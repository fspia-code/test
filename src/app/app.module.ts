import { SharedModule } from './shared/shared.module';

import { ChartdataService } from './services/chartdata.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedsService } from './services/newsfeeds.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { StockbodyComponent } from './stockview/stockbody/stockbody.component';
import { StocklistComponent } from './stockview/stocklist/stocklist.component';
import { StockitemComponent } from './stockview/stocklist/stockitem/stockitem.component';
import { StockviewComponent } from './stockview/stockview.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockbodyComponent,
    StocklistComponent,
    StockitemComponent,
    StockviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule
  ],

  providers: [NewsfeedsService,ChartdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
