import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">
      <img class="location-icon" src="/assets/location-pin.svg" alt="Location icon">
      {{ housingLocation.city}}, s
       {{housingLocation.state }}
    </p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>  
</section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  // ! ==> is a non null assertion operator: that tells the compiler that the value of the 
  // property won't be null or undefined.
  @Input() housingLocation!: HousingLocation;

}
