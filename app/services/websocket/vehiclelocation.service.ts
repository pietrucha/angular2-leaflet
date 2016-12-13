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
                console.log(response.data);
                let data: Blob = response.data;
                // var blob = new Blob(["This is my blob content"], { type: "text/plain" });
                var reader = new FileReader();

                let coordinates:number[];
                reader.addEventListener("loadend", text => {
                    coordinates = text.srcElement.result;
                    console.log("Blob result "+coordinates);
                });
                reader.readAsText(data);
                
                return {
                    text: coordinates
                }
            });
    }
} // end class 