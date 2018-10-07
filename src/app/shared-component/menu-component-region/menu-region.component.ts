import { Component, OnInit,Input, Output, EventEmitter } from "../../../../node_modules/@angular/core";


@Component({
selector:'menu-region',
templateUrl:'./menu-region.component.html',
styleUrls:['./menu-region.component.css']
})
export class menuComponent implements OnInit{
@Input() regionName
@Input() regionData

@Output()
notify: EventEmitter<String> = new EventEmitter<String>()

    constructor(){}
    ngOnInit(){
       
    }
    regionInfo():any{
        this.notify.emit(this.regionData)
        
    }

}