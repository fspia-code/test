import { Component, ViewChild } from '@angular/core';
import { StockbodyComponent } from './stockview/stockbody/stockbody.component';
import { StockSymbol } from './models/stocksymbol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockWallet';

  @ViewChild(StockbodyComponent) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol)
  {
  	this.stockbody.createChart();
  }
}
