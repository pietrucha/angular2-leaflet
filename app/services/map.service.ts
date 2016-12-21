import { Injectable } from '@angular/core';
import 'leaflet';

@Injectable()
export class MapService {
    getMap(): L.Map {
        let map = L.map("map", {
            zoomControl: false,
            center: [49.749921, 21.4207143],
            zoom: 12
        });
        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        return map;
    }
}