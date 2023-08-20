import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DubTransferService } from 'src/app/services/dub-transfer.service';
import { ProjectinfoService } from 'src/app/services/projectinfo.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  data1!: Array<any>;
  data2!: Array<any>;
  StatusCheckArr!: Array<any>;
  DepartmentCheckArr!: Array<any>;
  Total: number = 0;
  Registered: number = 0;
  Closed: number = 0;
  Running: number = 0;
  ClosureDealy: number = 0;
  Cancelled: number = 0;
  //department
  StartegyCount: number = 0;
  FinanceCount: number = 0;
  QualityCount: number = 0;
  MaintenanceCount: number = 0;
  StoresCount: number = 0;
  HRCount: number = 0;
  //department status count
  StartegyStatusCountClosed: number = 0;
  FinanceStatusCountClosed: number = 0;
  QualityStatusCountClosed: number = 0;
  MaintenanceStatusCountClosed: number = 0;
  StoresStatusCountClosed: number = 0;
  HRStatusCountClosed: number = 0;
  //percentage
  StartegyPer!: number;
  FinancePer!: number;
  QualityPer!: number;
  MaintenancePer!: number;
  StoresPer!: number;
  HRPer!: number;
  //chart
  property1!: Array<any>;
  property2!: Array<any>;
  title = 'ng2-charts-demo';
  arr!: Array<any>;
  num1!: any;
  num2!: any;
  percentages!: any;
  percentagesArr!: Array<any>;
  constructor(
    private _ProjectInfoService: ProjectinfoService,
    private _DubTransferService: DubTransferService
  ) {
    this._DubTransferService.dataTransfer.next(this.data1);
    this.method();
  }

  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {

    labels: ['STR', 'FIN', 'QLT', 'MAN', 'STO', 'HR'],
    datasets: [
      { data: [16, 35,78,90,67,344], label: 'Series A' },
      { data: [23, 56,56,78,34,987], label: 'Series B' },
    ],
  };
  ngOnInit(): void {
    console.log((12.33232).toFixed(2));



  }
  method(){
    this._ProjectInfoService.getAllProjects().subscribe((resp) => {
      this.StatusCheckArr = resp;
      this.StatusCheckArr.forEach((ele) => {
        this.Total = this.StatusCheckArr.length;
        if (ele.status === 'Registered') {
          this.Registered++;
        } else if (ele.status === 'Running') {
          this.Running++;
        } else if (ele.status === 'Closed') {
          this.Closed++;
        } else if (ele.status === 'Cancel') {
          this.Cancelled++;
        } else {
          this.ClosureDealy++;
        }
      });
    });
    //department
    this._ProjectInfoService.getAllProjects().subscribe((resp) => {
      this.DepartmentCheckArr = resp;

      this.DepartmentCheckArr.forEach((ele) => {
        if (ele.Department === 'Startegy') {
          this.StartegyCount = this.StartegyCount + 1;
          if (ele.status === 'Closed') {
            this.StartegyStatusCountClosed++;
            console.log(this.StartegyStatusCountClosed);
            console.log(this.StartegyCount);

            this.StartegyPer = +(
              this.StartegyStatusCountClosed / this.StartegyCount
            ).toFixed(2);
            console.log(this.StartegyStatusCountClosed);
            console.log(this.StartegyCount);
          }
        } else if (ele.Department === 'Finance') {
          this.FinanceCount++;
          if (ele.status === 'Closed') {
            this.FinanceStatusCountClosed++;
            this.FinancePer = +(
              (this.FinanceStatusCountClosed * 100) /
              this.FinanceCount
            ).toFixed(2);
          }
        } else if (ele.Department === 'Quality') {
          this.QualityCount++;
          if (ele.status === 'Closed') {
            this.QualityStatusCountClosed++;
            this.QualityPer = +(
              (this.QualityStatusCountClosed * 100) /
              this.QualityCount
            ).toFixed(2);
          }
        } else if (ele.Department === 'Maintenance') {
          this.MaintenanceCount++;
          if (ele.status === 'Closed') {
            this.MaintenanceStatusCountClosed++;
            this.MaintenancePer = +(
              (this.MaintenanceStatusCountClosed * 100) /
              this.MaintenanceCount
            ).toFixed(2);
          }
        } else if (ele.Department === 'Stores') {
          this.StoresCount++;
          if (ele.status === 'Closed') {
            this.StoresStatusCountClosed++;
            this.StoresPer = +(
              (this.StoresStatusCountClosed * 100) /
              this.StoresCount
            ).toFixed(2);
          }
        } else if (ele.Department === 'HR') {
          this.HRCount++;
          if (ele.status === 'Closed') {
            this.HRStatusCountClosed++;
            this.HRPer = +(
              (this.StoresStatusCountClosed * 100) /
              this.HRCount
            ).toFixed(2);
          }
        }
      });
    });
  }
  ngOnDestroy(): void {
    /*     this.StartegyCount = 0;
    this.MaintenanceCount = 0;
    this.StoresCount = 0;
    this.HRCount = 0;
    this.StartegyStatusCountClosed = 0;
    this.FinanceStatusCountClosed = 0;
    this.QualityStatusCountClosed = 0;
    this.MaintenanceStatusCountClosed = 0;
    this.StartegyPer = 0;
    this.FinancePer = 0;
    this.QualityPer = 0;
    this.MaintenancePer = 0;
    this.StoresPer = 0;
    this.HRPer = 0; */
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.data1 = [
      this.StartegyCount,
      this.FinanceCount,
      this.QualityCount,
      this.MaintenanceCount,
      this.StoresCount,
      this.HRCount,
    ];
    this.data2 = [
      this.StartegyStatusCountClosed,
      this.FinanceStatusCountClosed,
      this.QualityStatusCountClosed,
      this.MaintenanceStatusCountClosed,
      this.StoresStatusCountClosed,
      this.HRStatusCountClosed,
    ];
  }



  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

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
