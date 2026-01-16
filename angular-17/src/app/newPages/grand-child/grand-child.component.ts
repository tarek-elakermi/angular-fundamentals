import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [
  ],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss'
})
export class GrandChildComponent {

  userName: string = 'grand child component';
  userEmail: string=  'grand-childe@component.com';

}
