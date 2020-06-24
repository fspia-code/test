import { ChartdataService } from './services/chartdata.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedsService } from './services/newsfeeds.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockitemComponent } from './stocklist/stockitem/stockitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockbodyComponent,
    StocklistComponent,
    StockitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsfeedsService,ChartdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
