import { Component, OnInit } from '../../../node_modules/@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { HttpService } from '../httpservice.service';

@Component({
    templateUrl: './allcountry.component.html',
    styleUrls: ['./allcountry.component.css']
})
export class AllCountryComponent implements OnInit {
    public countries
    public language:any[]=[]
    public currencies:any[]=[]
    showFiller = false;
    region
    arr:any[]=[]
    alphabet:any[]=[]

   


    constructor(private route:ActivatedRoute,public Http:HttpService,private router:Router){}
    ngOnInit() {
       this.region=this.route.snapshot.queryParamMap.get('region')
        this.Http.GetRegionCountry(this.region).subscribe(data=>{
            console.log(data)
            this.countries=data
           
            this.getInfocountry(this.countries)
        })
       
      
       
    }
   

    gotodefaultState():any{
        location.reload()
    }

    gotopreviousPage():any{
     this.router.navigate(['/home'])
    }
    
    explore1(country):any{
        console.log('heelo')    
        this.router.navigate(['/Info'],{queryParams:{country:country}})
    }

    public getInfocountry(data):any{
   for(let i=0;i<data.length;i++){
     for(let j of data[i].languages){
      
     this.language.push({'name':j.name,'value':j.iso639_1,'type':'lang'})
       
        

     }
   } 

   for(let i=0;i<data.length;i++){
    for(let j of data[i].currencies){
     
       this.currencies.push({'name':j.name,'value':j.code,'type':'currency'})
    // this.currencies.push(j.name)

    }
  } 
    }

    getlancurr(event){
    this.region=this.region.charAt(0).toUpperCase() +  this.region.slice(1) 
    console.log(event)
    console.log(this.region)
    if(event==this.region){
        console.log('fucj')
       
        this.ngOnInit()

    }else{

        this.Http.GetlancurrInfo(event.type,event.value).subscribe(data=>{
            console.log(data)
            this.countries=data
        })
    }
   
        
      
    }

}
