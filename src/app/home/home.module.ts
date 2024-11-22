import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Data } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [HomeComponent, DataTableComponent],
  imports: [CommonModule],
})
export class HomeModule {
  locationData: string[] = []

  constructor(private http: HttpClient){

  }

  
}
