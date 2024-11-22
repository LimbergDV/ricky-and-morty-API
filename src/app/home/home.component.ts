import { Component } from '@angular/core';
import { LocationService } from '../service/location.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  locationData: any;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getLocation().subscribe(
      (data) => {
        this.locationData = data;
        console.log(this.locationData);
      },
      (error) => {
        console.log('Error al cargar los datos', error);
      }
    );
  }
}
