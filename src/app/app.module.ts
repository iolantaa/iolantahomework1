
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
