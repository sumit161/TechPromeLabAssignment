import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectinfoService } from 'src/app/services/projectinfo.service';

@Component({
  selector: 'app-forminfo',
  templateUrl: './forminfo.component.html',
  styleUrls: ['./forminfo.component.scss'],
})
export class ForminfoComponent implements OnInit {
  Reason: Array<string> = ['Business', 'Dealership', 'Transport'];
  type: Array<string> = ['Internal', 'External', 'Vendor'];
  division: Array<string> = [
    'Compressor',
    'Filters',
    'Pumps',
    'Glass',
    'Water Heater',
  ];
  Category: Array<string> = [
    'Quality A',
    'Quality B',
    'Quality C',
    'Quality D',
  ];
  Priority: Array<string> = ['High', 'Low', 'Medium'];
  Department: Array<string> = [
    'Startegy',
    'Finance',
    'Quality',
    'Maintenance',
    'Stores',
    'HR',
  ];
  Location: Array<string> = ['Pune', 'Delhi', 'Mumbai'];
  creteProject!: FormGroup;
  constructor(private _ProjectInfoService: ProjectinfoService) {}

  ngOnInit(): void {
    this.projectInfo();
  }
  projectInfo() {
    this.creteProject = new FormGroup({
      projectName: new FormControl(null),
      Reason: new FormControl(null),
      type: new FormControl(null),
      Division: new FormControl(null),
      Category: new FormControl(null),
      priority: new FormControl(null),
      Department: new FormControl(null),
      startdate: new FormControl(null),
      enddate: new FormControl(null),
      location: new FormControl(null),
    });
  }
  projectdata() {}
  collectdeta() {
    console.log(this.creteProject.value);
    let projectsObj = {
      ...this.creteProject.value,
      status: 'Registered',
    };
    this._ProjectInfoService.addOneObj(projectsObj).subscribe();
  }
}
