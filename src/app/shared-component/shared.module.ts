import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { menuComponent } from "./menu-component-region/menu-region.component";
import { regiondetailsComponent } from "./region-details-component/region-details.component";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { AllCountryComponent } from "../all-country/allcountry.component";
import { FilterComponent } from "./filter-data/filter.component";



const routes: Routes=[{path:'country',component:AllCountryComponent}]

@NgModule({
    declarations:[menuComponent,regiondetailsComponent,FilterComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[menuComponent,regiondetailsComponent,FilterComponent,CommonModule]
})
export class SharedModule{}