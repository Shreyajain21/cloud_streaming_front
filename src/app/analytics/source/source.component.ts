import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];
  
  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 67, 70, 75, 80, 90], label: '' },
  //   { data: [50, 48, 47, 49, 44, 40], label: '' },
  //   { data: [40, 30, 28, 25, 22, 20], label: '' },
  // ];
  // -------------
 
  
// ADD CHART OPTIONS. 
chartOptions = {
  responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}
labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// STATIC DATA FOR THE CHART IN JSON FORMAT.
chartData = [
  {
    label: '1st Year',
    data: [
      470, 9, 28, 54, 7, 51, 24] 
  },
  { 
    label: '2nd Year',
    data: [21, 5, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59]
  },
  { 
    label: '3rd Year',
    data: [47, 9, 28, 54, 7, 51, 24]
  }
];

// CHART COLOR.
colors = [
  { // 1st Year.
    backgroundColor: 'rgb(17, 17, 31) '
  },
  
  { // 2nd Year.
    backgroundColor: 'gray'
  },
  { // 1st Year.
    backgroundColor: 'rgba(77,83,96,0.2)'
  },
]
// CHART CLICK EVENT.
onChartClick(event:any) {
  console.log(event);
}

// +++++++++++++

  ngOnInit(): void {
  }

}
