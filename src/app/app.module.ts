import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class data{
  roles:String;
  link:String;
  image:String;
  launches:String;
  home_port:String;
  name:String;

  constructor(
    roles:String,
    link:String,
    image:String,
    launches:String,
    home_port:String,
    name:String
)

{
  this.roles=roles;
  this.link=link;
  this.image=image;
  this.launches=launches;
  this.home_port=home_port;
  this.name=name;
}
  }


