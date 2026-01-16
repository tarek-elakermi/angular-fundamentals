import { Component, Injector } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  userName!:string;

  constructor(private _dataService: DataService) {
    this.userName = this._dataService.userName;
  }

}
