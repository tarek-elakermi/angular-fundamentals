import { Component, Injector } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { BlogComponent } from "../blog/blog.component";
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    BlogComponent,
    RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // this is called dynamic injection using the injector of angular core
  //constructor(private injector: Injector) {
    //injector.get(DataService);
    //console.log(injector.get(DataService).userName)
    //const instance = injector.get(DataService).userName = 'new data';
    //console.log(instance);
  //}

  constructor(private _dataService: DataService) {
    const instance = _dataService.userName = 'new injection'
    console.log(instance)
  }

  doGet() {
    this._dataService.doGet().subscribe(
      (data) => console.log(data)
    );
  }

  doGetById() {
    this._dataService.doGetByParams().subscribe(
      (data) => console.log(data)
    );
  }

  doPost() {
    this._dataService.doCreate().subscribe(
      (obj) => console.log(obj)
    )
  }

  doupdate() {
    this._dataService.doUpdate().subscribe(
      (obj) => console.log(obj)
    )
  }

  doPatch() {
    this._dataService.doPatch().subscribe(
      (obj) => console.log(obj)
    )
  }

  doDelete() {
    this._dataService.doDelete().subscribe(
      {
        next: (obj) => console.log(obj),
        error: (err) => console.log(err),
        complete: () => console.log('done')
      })
  }






}
