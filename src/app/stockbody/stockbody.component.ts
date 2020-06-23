import { ChartdataService } from './../services/chartdata.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.css']
})
export class StockbodyComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('charts') public chartEl: ElementRef;

	constructor(private hcs: ChartdataService)
	{

  	}

	ngOnInit() {}

	ngAfterViewInit()
	{
		this.createChart();
	}

	ngOnDestroy()
	{

	}

	createChart()
	{
		this.hcs.loadData("ATVI", (symbol, data)=> {
			this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
		});
	}

}