import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  userAge: string = '50';
  userName: string = 'jamila';
  userEmail: string = "contact@dev.com";
  userPhone: string = "41544484";

}
