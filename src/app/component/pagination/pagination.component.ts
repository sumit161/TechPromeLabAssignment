import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectinfoService } from 'src/app/services/projectinfo.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  ProjectsArr!: Array<any>;
  search!: string;
  displayedColumns = [
    'id',
    'projectName',
    'Reason',
    'type',
    'Division',
    // 'quality',
    'priority',
    'Department',
    // 'startdate',
    // 'enddate',
    'location',
    'status',
    'option',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private _ProjectInfoService: ProjectinfoService) {}

  ngOnInit(): void {
    this._ProjectInfoService.getAllProjects().subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
    // console.log(this.dataSource);

    // this.dataSource = this.dataSource.filter(ele=>ele.Name.includes)
  }
  object!: any;
  StatusChange(id: any, Status: string) {
    console.log(id, Status);
    this._ProjectInfoService.getSingleProjects(id).subscribe((resp) => {
      console.log(resp);
      this.object = resp;
      let ChangeStatusObj = {
        id: this.object.id,
        projectName: this.object.projectName,
        Reason: this.object.Reason,
        type: this.object.type,
        Division: this.object.Division,
        quality: this.object.quality,
        priority: this.object.priority,
        Department: this.object.Department,
        startdate: this.object.startdate,
        enddate: this.object.enddate,
        location: this.object.location,
        status: Status,
        option: this.object.option,
      };
      this._ProjectInfoService.PachDeta(ChangeStatusObj).subscribe();
    });
  }
}
