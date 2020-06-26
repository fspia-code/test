import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { StockSymbol } from 'src/app/models/stocksymbol';

@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.scss']
})
export class StockitemComponent implements OnInit {

  @Input() symbol: StockSymbol;
  @Output() symbolSelected = new EventEmitter<StockSymbol>();
  constructor() { }

  ngOnInit() { }
  onSelected()
  {
    this.symbolSelected.emit(this.symbol);
  }

}
