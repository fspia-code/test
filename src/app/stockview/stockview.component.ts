import { Component, ViewChild } from '@angular/core';

import { StockbodyComponent } from './stockbody/stockbody.component';
import { StockSymbol } from '../models/stocksymbol';

@Component({
  selector: 'app-stockview',
  templateUrl: './stockview.component.html',
  styleUrls: ['./stockview.component.scss']
})
export class StockviewComponent  {

  @ViewChild(StockbodyComponent) stockbody: StockbodyComponent;

  symbolSelectedFromList(symbol: StockSymbol)
  {
  	this.stockbody.createChart(symbol.id);
  }

}
