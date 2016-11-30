import { Component, OnInit } from '@angular/core';
import 'leaflet';
@Component({
  selector: 'my-app',
  template: `
          <div id="map" style="width:100%; height:1000px"></div>
  `
})
export class AppComponent implements OnInit {
  name = 'Angular';
  private map: any;
  ngOnInit() {

    this.map = L.map("map", {
      center: [49.749921, 21.4207143],
      zoom: 13
    });
    // setView([23.709921, 90.407143], 7);
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  

  }
}
