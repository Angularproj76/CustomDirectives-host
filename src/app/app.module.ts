import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetbackgroundDirective } from './CustomDirective/setbackground.directive';
import { Renderer2exampleDirective } from './CustomDirective/renderer2example.directive';
import { HostListenerMouseoverDirective } from './host-listener-mouseover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetbackgroundDirective,
    Renderer2exampleDirective,
    HostListenerMouseoverDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
