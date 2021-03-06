import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HttpService } from './http.service';
import { JobsComponent } from './jobs/jobs.component';
import { DiscussComponent } from './discuss/discuss.component';
import { StudygroupsComponent } from './studygroups/studygroups.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudygroupformComponent } from './studygroupform/studygroupform.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    JobsComponent,
    DiscussComponent,
    StudygroupsComponent,
    LoginComponent,
    RegistrationComponent,
    StudygroupformComponent,
    GroupdetailsComponent,
    NavigationComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
