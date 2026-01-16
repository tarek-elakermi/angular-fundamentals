import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @HostBinding('style.color') styleColor:string = 'red';
  @HostBinding('attr.user-attr') customAttr:string = 'user-attr';
  @HostBinding('class') classBin:string = 'ActiveClass';

  @HostListener('click') onClick() {
    console.log('click');
  }

}
