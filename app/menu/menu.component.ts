import { Component, OnInit } from '@angular/core';
import { LineService } from '../services/line.service';

@Component({
    selector: "menu",
    template: `
    <div class="panel-group" style="position: absolute;
        top: 20px;
        z-index:401;
        width:250px;
        ">
        <input type="text" class="form-control" id="usr">       
        <div class="panel panel-default">
            <button type="button" class="list-group-item" data-toggle="collapse" data-target="#demo">Lines</button>
            <div id="demo" class="panel-collapse collapse">
                test {{data}}
            </div>
        </div>        
        <button type="button" class="list-group-item">Stops</button>        
    </div>
    `,
    providers: [LineService]
})
export class Menu implements OnInit {
    private data:string;
    constructor(private lineService: LineService) {
    }

    ngOnInit() {
        this.lineService.getLines().subscribe(
            data => this.data = JSON.stringify(data),error => console.log(error)
        );
    }

}