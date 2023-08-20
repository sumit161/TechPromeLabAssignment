import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DubTransferService {
  dataTransfer: Subject<Array<any>> = new Subject<Array<any>>();
  constructor() {}
}
