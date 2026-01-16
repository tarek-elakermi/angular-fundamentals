import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {



  constructor() { }

  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';


    async getAllHousingLocations() : Promise<HousingLocation[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getHousingLocationById(id: number) : Promise<HousingLocation | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      if(!data.ok){
        return undefined;
      }


      return (await data.json()) as HousingLocation;
      
    }

    submitApplication(firstName: string, lastName: string, email: string){
      console.log(firstName,lastName,email);
    }





















}
