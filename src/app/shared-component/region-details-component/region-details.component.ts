import { Component, OnInit, Input } from "../../../../node_modules/@angular/core";
import { ActivatedRoute, Router } from "../../../../node_modules/@angular/router";

@Component({
    selector:'region-details',
    templateUrl:'./region-details.component.html',
    styleUrls:['./region-details.component.css']
})
export class regiondetailsComponent implements OnInit{
    
    @Input() selectedData 
    @Input() defaultData

    constructor(private router: Router) {}
    ngOnInit(){
        console.log(this.selectedData,this.defaultData)
       
       
    }

    gotocountry(region):any{
    this.router.navigate(['/country'],{queryParams:{region:region}})
    }
}