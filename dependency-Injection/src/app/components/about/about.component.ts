import { Component,Injector } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  userName!:string;

  // old dynamic injection
  /* constructor(private injector: Injector){
    this.userName = injector.get(DataService).userName;
    console.log(injector.get(DataService))
  } */

    //
    constructor(private _dataService: DataService) {
    this.userName = this._dataService.userName;
  }

}
