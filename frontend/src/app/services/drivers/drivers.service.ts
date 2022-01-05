import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../../environments/environment'; 
import { Driver } from 'src/app/modules/drivers/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  driver: Driver = new Driver();
  private REST_API_DRIVERS = environment.BASE_URL+"/drivers";

  constructor( private httpClient: HttpClient  ) { 
  }

  public getDrivers(){
    return this.httpClient.get(this.REST_API_DRIVERS);
  }

  public createDriver(driver: any) {
    const headers = { 'Content-Type': 'application/json'};
    return this.httpClient.post(this.REST_API_DRIVERS, JSON.stringify(driver), { headers });
  }
}

