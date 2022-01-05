import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import  {Driver} from '../driver.model'

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {

  driver: Driver = new Driver();

  constructor( private driverService : DriversService) { }

  ngOnInit(): void {
  }

  createDriver(): void {
    this.driver.createdBy  = 1

    this.driverService.createDriver(this.driver).subscribe (data => {
      console.log(data)
    });

  }

}
