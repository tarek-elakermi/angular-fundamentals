import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  userAge: string = '30';
  userName: string = 'tarek';
  userEmail: string = "aboutr@dev.com";
  userPhone: string = "41544484";

}
