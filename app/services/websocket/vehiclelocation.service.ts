import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebSocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:9090';

export interface Message {
    text: number[]    
};
// public Coord: number[] ;

@Injectable()
export class VehicleLocationService {
    public messages: Subject<Message>;

    constructor(wsService: WebSocketService) {
        this.messages = <Subject<Message>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Message => {
                // console.log(response.data);
                let data = JSON.parse(response.data);

                console.log("service km1:" + JSON.stringify(data, null, 4));
                return {
                    text: data
                }
            });
    }
} // end class 