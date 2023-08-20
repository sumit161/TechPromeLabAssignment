import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';
import { DubTransferService } from 'src/app/services/dub-transfer.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  // @Input() property1: Array<any> = [190, 23, 74, 389];
  // @Input() property2!: Array<any>;
  property1!:Array<any>;
  property2!: Array<any>;
  title = 'ng2-charts-demo';
  arr!: Array<any>;
  num1!: any;
  num2!: any;
  percentages!: any;
  percentagesArr!: Array<any>;

  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['STR', 'FIN', 'QLT', 'MAN', 'STO', 'HR'],
    datasets: [
      { data: this.property1, label: 'Series A' },
      { data: [237, 123, 231, 321], label: 'Series B' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  ngOnInit(): void {
    this.forloop();
  }
  forloop() {
    let data1 = this.barChartData.datasets[0]['data'];
    let data2 = this.barChartData.datasets[1]['data'];

    for (let i = 0; i < data1.length; i++) {
      for (let j = 0; j < data2.length; j++) {
        if (i === j) {
          this.num1 = data1[i];
          this.num2 = data2[j];

          this.percentages = ((this.num2 / this.num1) * 100).toFixed(2);
          // this.percentagesArr.push(this.percentages);
          // console.log(y);
          console.log(this.barChartData.datasets[0]['data']);
          // console.log(this.barChartData.labels?.unshift("mty"));
        }
      }
    }

    this.barChartData.labels?.map((ele) => {
      // console.log(ele);
    });
    // console.log(this.percentages);
    // console.log(this.percentagesArr);

    this.percentages.map((pers: any) => {
      // console.log('pers');
    });
  }
}
