
import { ChartdataService } from '../../services/chartdata.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.scss']
})
export class StockbodyComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('charts') public chartEl: ElementRef;

	constructor(private hcs: ChartdataService)
	{

  	}

	ngOnInit() {}

	ngAfterViewInit()
	{
		// this.createChart();
	}

	ngOnDestroy()
	{

	}

	createChart(symbol)
	{
		this.hcs.loadData(symbol, (symbol, data)=> {
			this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
		});
	}

}
