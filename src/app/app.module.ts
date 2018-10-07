import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Route, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './indivisual-country/country.component';
import { AllCountryComponent } from './all-country/allcountry.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './httpservice.service';
import { SharedModule } from './shared-component/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';




const routes: Routes = [{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'country',component:AllCountryComponent},
{path:'Info',component:CountryComponent},
{path:'**',redirectTo:'home',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountryComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    SharedModule
  
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
