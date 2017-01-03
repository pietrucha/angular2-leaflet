import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebSocketService } from './websocket.service';

const VEHICLE_LOCATION_URL_WS = 'ws://localhost:9090/chat';

export interface Message {
    text: GeoJSON.GeoJsonObject
};
// public Coord: number[] ;

@Injectable()
export class VehicleLocationService {
    public messages: Subject<Message>;

    constructor(wsService: WebSocketService) {
        this.messages = <Subject<Message>>wsService.connect(VEHICLE_LOCATION_URL_WS)
            .map((response: MessageEvent): Message => {
                console.log(response.data);                
                console.log("location "+window.location.host);
                return {                    
                    text: JSON.parse(response.data)
                }
            });
    }
} // end class 