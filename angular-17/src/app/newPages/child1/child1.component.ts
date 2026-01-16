import { Component, ContentChild } from '@angular/core';
import { GrandChildComponent } from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {

  userName: string = 'child component';
  userEmail: string=  'childe@component.com';


}
