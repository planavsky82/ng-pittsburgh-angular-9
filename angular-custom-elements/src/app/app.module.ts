import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { ApplicationOneComponent } from './application-one/application-one.component';
import { ApplicationTwoComponent } from './application-two/application-two.component';

@NgModule({
  declarations: [
    ApplicationOneComponent,
    ApplicationTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ApplicationOneComponent, ApplicationTwoComponent]
})
export class AppModule { 
 constructor(private injector: Injector) {}

 ngDoBootstrap() {
    const appOne = createCustomElement(ApplicationOneComponent, {injector: this.injector});
    customElements.define('application-one', appOne);
    const appTwo = createCustomElement(ApplicationTwoComponent, {injector: this.injector});
    customElements.define('application-two', appTwo);
  }  
}
