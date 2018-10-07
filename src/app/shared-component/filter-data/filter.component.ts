import { Component, OnInit, Input, Output, EventEmitter } from "../../../../node_modules/@angular/core";
import { HttpService } from "../../httpservice.service";

@Component({
    selector:'filter',
    templateUrl:'./filter.component.html',
    styleUrls:['./filter.componet.css']
})
export class FilterComponent implements OnInit{
    @Input() region
    @Input() language
    @Input() currencies
    @Output()
    notify: EventEmitter<String> = new EventEmitter<String>()
  
    
    constructor(public Http:HttpService){}
    ngOnInit(){
      console.log(this.region)
       
    }
    filtercurrency(event){
       
        this.notify.emit(event)
    }
    filterlanguage(event){
      
        this.notify.emit(event)
    }
    filterregion(event){
        this.notify.emit(event)
    }
}