import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.less']
})
export class DonarComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Salchichas', 'Chorizs', 'Tortilla'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100],
     [50, 150, 120],
     [250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';
 
   constructor() { }
 
   ngOnInit() {
   }
 
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }

}
