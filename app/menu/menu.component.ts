import { Component } from '@angular/core';

@Component({
    selector: "menu",
    template: `
    <div class="list-group" style="position: absolute;
        top: 20px;
        z-index:401;">
        <input type="text" class="form-control" id="usr">       
        <button type="button" class="list-group-item btn btn-info" data-toggle="collapse" data-target="#demo">Lines</button>
        <div id="demo" class="collapse">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <button type="button" class="list-group-item">Stops</button>        
    </div>
    `
})
export class Menu {

}