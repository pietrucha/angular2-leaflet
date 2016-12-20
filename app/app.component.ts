import { Component, OnInit } from '@angular/core';
// services
import { MapService } from './services/map.service';
import { WebSocketService } from './services/websocket/websocket.service';
import { VehicleLocationService, Message } from './services/websocket/vehiclelocation.service';
import { Menu } from './menu/menu.component';

import { ElementRef } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import 'leaflet';
@Component({
  selector: 'my-app',
  template: `
          <div style="width:100%; height: 100vh;">
            <div id="map" style="width:100%; height: 100vh; position: relative;  ">              
            </div>
            <menu></menu>
          <div>
  `,
  providers: [MapService,
    VehicleLocationService,
    WebSocketService]

})
export class AppComponent implements OnInit {
  name = 'Angular';
  private map: L.Map;
  private layer: L.GeoJSON;
  private messages: Message[] = [];

  constructor(
    private mapService: MapService,
    private vehicleLocationService: VehicleLocationService
  ) {
    vehicleLocationService.messages.subscribe(msg => {
      // console.log("komunikat: " + msg.text);

      // this.messages.push(msg);      
      // L.marker(L.latLng(msg.text[0], msg.text[1])).addTo(this.map);
      
      this.layer.clearLayers();
      this.layer.addData(msg.text);
    })
  }

  ngOnInit() {
    this.map = this.mapService.getMap();

    this.map.on('click', ((e: any) => {
      L.popup().setLatLng(e.latlng)
        .setContent("You clicked map: " + e.latlng.toString())
        .openOn(this.map);
    }));

    this.layer = L.geoJSON(null, {
      pointToLayer: function (feature, latlng) {
        let icon = L.icon({
          iconUrl: '../resources/images/bus_black.png'
        });
        let divIcon = L.divIcon({
          html: `
          <div>
            <img src="../resources/images/bus_black.png"
               tabindex="0">
            <div style="position:absolute; top:10; border-radius:50%; 
              background:green; width:15px;height:15px;">
              <b style="color:black; text-align:center; vertical-align: middle;margin:0 auto;">          
                `+ feature.properties.name + `
              </b>               
            </div>
          </div>
          `, className: 'leaflet-marker-icon'          
        });

        let marker = L.marker(latlng, {
          icon: divIcon
        });

        marker.bindTooltip("<div>Bus: <b>" + feature.properties.name + "</b></div>",
          {
            offset: [24, 0],
            direction: 'right'
          }).openTooltip();

        return marker;
      }
    });
    this.layer.addTo(this.map);
  }
}
