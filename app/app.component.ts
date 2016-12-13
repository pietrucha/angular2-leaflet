import { Component, OnInit } from '@angular/core';
// services
import { MapService } from './services/map.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { VehicleLocationService, Message } from './services/websocket/vehiclelocation.service';

import { ElementRef } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import 'leaflet';
@Component({
  selector: 'my-app',
  template: `
          <div id="map" style="width:100%; height:1000px"></div>
  `,
  providers: [MapService,
    VehicleLocationService,
    WebSocketService]

})
export class AppComponent implements OnInit {
  name = 'Angular';
  private map: L.Map;

  private messages: Message[] = [];

  constructor(private mapService: MapService,
    private vehicleLocationService: VehicleLocationService
  ) {
    vehicleLocationService.messages.subscribe(msg => {
      console.log("komunikat:" + msg.text);
      // msg.text.slice()
      this.messages.push(msg);
      console.log("this.msg" + msg);

      console.log("km1:" + JSON.stringify(this.messages[0], null, 4));
      L.marker(L.latLng(msg.text[0], msg.text[1])).addTo(this.map);
    })
  }

  ngOnInit() {

    this.map = this.mapService.getMap();

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', ((e: any) => {
      L.popup().setLatLng(e.latlng)
        .setContent("You clicked map: " + e.latlng.toString())
        .openOn(this.map);
      // alert("clicked on map "+ e.latlng);
    })
    );



  }
}
