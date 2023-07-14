import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavibarComponent } from './navibar/navibar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { SlidedivComponent } from './slidediv/slidediv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Infobox2Component } from './infobox2/infobox2.component';
import { SocialaccountComponent } from './socialaccount/socialaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavibarComponent,
    HomepageComponent,
    AboutpageComponent,
    InfoboxComponent,
    SlidedivComponent,
    Infobox2Component,
    SocialaccountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
