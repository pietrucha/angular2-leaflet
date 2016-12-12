import { Injectable } from '@angular/core';
import 'leaflet';

@Injectable()
export class MapService{
    getMap():L.Map{
        return L.map("map", {
      center: [49.749921, 21.4207143],
      zoom: 13
    });
    }
}