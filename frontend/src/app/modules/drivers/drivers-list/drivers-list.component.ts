import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { Driver } from '../driver.model'; 

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  drivers?: Driver[];

  constructor(private driverService: DriversService ) { }

  ngOnInit(): void {

    this.driverService.getDrivers().subscribe((data : any )=>{
      this.drivers = data
      console.log(this.drivers)
      
    })
     
  }

}
