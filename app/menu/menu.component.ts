import { Component } from '@angular/core';

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>        
        <button type="button" class="list-group-item">Stops</button>        
    </div>
    `
})
export class Menu {

}