import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector',
    template: `<h1>Hello Cordova, from transpiled angular</h1>`
})
export class AppComponent implements OnInit {
    // declare let window: window;

    constructor() { }

    ngOnInit() {
        window.addEventListener("batterystatus", this.onBatteryStatus, false);
     }

     onBatteryStatus(status: any) {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
     }
}