import { Component, OnInit } from '../../../node_modules/@angular/core';
import { ActivatedRoute,Router } from '../../../node_modules/@angular/router';
import { HttpService } from '../httpservice.service';

@Component({
templateUrl: './country.component.html',
styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

 public countryName
 public countryInfo
 public currencies
 public language
  region: any;
 

    constructor(private route:ActivatedRoute,public Http:HttpService,private router:Router){}
    ngOnInit() {
      this.countryName=this.route.snapshot.queryParamMap.get('country')
      this.Http.GetCountryInfo(this.countryName).subscribe(data=>{
          console.log(data)
          this.countryInfo=data
          this.getData(this.countryInfo)
        
        
      })


       
        
        }

        getData(allData):any{
          for(let data of allData){
            this.currencies=data.currencies
            this.language=data.languages
            this.region=data.region
           

          }

        }


        gotopreviouspage():any{
          this.router.navigate(['/country'],{queryParams:{region:this.region}})
         
        }
}
