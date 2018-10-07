
import { HttpClient , HttpParams } from "@angular/common/http";
import {Observable,of,throwError} from 'rxjs'
import { map } from 'rxjs/operators'
import { Injectable } from "../../node_modules/@angular/core";

@Injectable(
)
export class HttpService{
    public base_Url='https://restcountries.eu/rest/v2/'
    public info_region=[
        {
            photo:'assets/asia.jpg',
            status:true,
            region:"asia",
            description:'It is the largest continent by area (about a third of the world’s land is here), with the most people living on it. For every ten people alive today, six of them live in Asia.Asia is a continent of uniqueness, fascination and bewilderment all brought about by its cultures, economies, populations, landscapes, plants and animals.'
        },
        {
             photo:'assets/euro.jpg',
             status:false,
             region:'europe',
             description:'With a land area of only 4,000,000 square miles, Europe is the second smallest continent in the world, just behind Australia.'
        },
        {
             photo:'assets/americas.jpg',
             status:false,
             region:'americas',
             description:"The Americas (also collectively called America) comprise the totality of the continents of North and South America.Together,they make up most of the land in Earth's western hemisphere and comprise the New World."

        },
        {
             photo:'assets/afro.jpg',
             status:false,
             region:'africa',
             description:'The African continent has the second largest population in the world, at about one billion people, Over one thousand languages are spoken by the people of Africa. '
        },
        {
             photo:'assets/oceania.jpg',
             status:false,
             region:'oceania',
             description:'The region of Oceania and Australia includes the continent of Australia as well as many surrounding island countries.'

        }
    ]

    constructor(public Http:HttpClient){}
    
    public GetAllRegion(){
      return this.info_region
     }

     public GetRegionCountry(region){
         return this.Http.get(this.base_Url+'region/'+region)
     }
     public GetCountryInfo(country){
      return this.Http.get(this.base_Url+'name/'+country)
     }
     public GetlancurrInfo(type,code){
         return this.Http.get(this.base_Url+type+'/'+code)
     }

} 
