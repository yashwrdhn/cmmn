import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmmnModelerComponent } from './cmmn-modeler/cmmn-modeler.component';
import { XmlViewerComponent } from './xml-viewer/xml-viewer.component';
import { DmnModelerComponent } from './dmn-modeler/dmn-modeler.component';

@NgModule({
  declarations: [
    AppComponent,
    CmmnModelerComponent,
    XmlViewerComponent,
    DmnModelerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
