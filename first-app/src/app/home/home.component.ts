import { CommonModule } from '@angular/common';
import { Component, inject, Inject} from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResult(filter.value)">Search</button>
    </form>
  </section>
    <section class="results">
      <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];


  constructor() {
    // 1- this when we used a static array in the service
    //this.housingLocationList = this.housingService.getAllHousingLocations();
    // by default when the page is loaded the filtered list should conatin the hole set of the initial array of locations
    //this.filteredLocationList = this.housingLocationList;

    // 2- now we are using asynchronous http calls
    
  }
  
  async ngOnInit(){
      this.loadAllHousingLocation();
    }

  async loadAllHousingLocation(){
    this.housingService.getAllHousingLocations()
    .then(
      (housingLocationList: HousingLocation[]) => {

      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      });
  }




  filterResult(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }


}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

