import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  //   Highcharts.chart('container', {
  //     chart: {
  //         type: 'variablepie'
  //     },
  //     title: {
  //         text: 'Account Manager Statistics'
  //     },
  //     colors: ['#5870B2', '#559DE5', '#FDAC42', '#0593A1', '#E94E1B'],
  //     plotOptions: {
  //       variablepie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         align: 'right',
  //         floating: true,
  //         dataLabels: {
  //           enabled: true
  //         },
  //         showInLegend:true
  //       }
  //     },
      
  //     series: [{
  //         minPointSize: 10,
  //         innerSize: '20%',
  //         zMin: 0,
          
  //         data: [{
  //             name: 'Shortlisted',
              
  //             y: 505370,
  //             z: 92.9
  //         }, {
  //             name: 'Submitted',
  //             y: 551500,
  //             z: 118.7
  //         },
  //         {
  //           name: 'Offered',
  //           y: 312685,
  //           z: 124.6
  //       },
  //       {
  //         name: 'Joined',
  //         y: 78867,
  //           z: 137.5
  //     },
  //     {
  //       name: 'Submitted To Client',
  //       y: 357022,
  //       z: 235.6
  //   },]
  //     }]
  // });
  
  
  
  }

}
