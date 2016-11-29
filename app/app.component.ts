import { Component, OnInit } from '@angular/core';
import { L } from 'leaflet';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
          <div id="map" style="width:100%, height:100%"></div>
  `

  ,
})
export class AppComponent implements OnInit {
    name = 'Angular';
  private map: any;
  ngOnInit() {

    this.map = L.map("map").setView([23.709921, 90.407143], 7);
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(this.map);

  }
}
