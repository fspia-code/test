import { HttpClientModule } from '@angular/common/http';
import { NewsfeedsService } from './newsfeeds.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockbodyComponent } from './stockbody/stockbody.component';
import { StocklistComponent } from './stocklist/stocklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockbodyComponent,
    StocklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsfeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
