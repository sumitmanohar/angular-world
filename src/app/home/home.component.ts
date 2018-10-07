import { Component, OnInit } from '../../../node_modules/@angular/core';
import { HttpService } from '../httpservice.service';


@Component({
    selector:'home-details',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public region_Data
   public regionselectedData
   public available_Data

    constructor(public Http:HttpService){}

    ngOnInit(){
        this.region_Data=this.Http.GetAllRegion()
         this.available_Data=this.region_Data[0]   
     
    }
    showregionInfo($event):any{
        console.log($event)
        this.regionselectedData=$event
    }
}
