
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SecondheaderComponent } from './home/secondheader/secondheader.component';
import { PhotoDivComponent } from './home/photo-div/photo-div.component';
import { RowbgComponent } from './home/rowbg/rowbg.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { NavComponent } from './home/nav/nav.component';
import { Blog1Component } from './home/blog1/blog1.component';
import { Blog2Component } from './home/blog2/blog2.component';
import { IminfComponent } from './home/iminf/iminf.component';
import { MeetComponent } from './home/meet/meet.component';
import { PeopleblogComponent } from './home/peopleblog/peopleblog.component';
import { ConnectsComponent } from './home/connects/connects.component';
import { ContactsphotoComponent } from './home/contactsphoto/contactsphoto.component';
import { EndsComponent } from './home/ends/ends.component';
import { FormsComponent } from './home/forms/forms.component';
import { StepformComponent } from './home/stepform/stepform.component';
import { ProfileComponent } from './home/stepform/profile/profile.component';
import { DetailsComponent } from './home/stepform/details/details.component';
import { PaymentComponent } from './home/stepform/payment/payment.component';
import { InfoComponent } from './home/stepform/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SecondheaderComponent,
    PhotoDivComponent,
    RowbgComponent,
    PortfolioComponent,
    NavComponent,
    Blog1Component,
    Blog2Component,
    IminfComponent,
    MeetComponent,
    PeopleblogComponent,
    ConnectsComponent,
    ContactsphotoComponent,
    EndsComponent,
    FormsComponent,
    StepformComponent,
    ProfileComponent,
    DetailsComponent,
    PaymentComponent,
    InfoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule,
   
   
    RouterModule.forRoot([
      {
        path: 'form',
        component: FormsComponent
      },
      
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {path:'shop',
      component: StepformComponent },
      {path:'',
      pathMatch:'full',
      component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
