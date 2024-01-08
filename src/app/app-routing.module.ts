import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmmnModelerComponent } from './cmmn-modeler/cmmn-modeler.component';
import { XmlViewerComponent } from './xml-viewer/xml-viewer.component';
import { DmnModelerComponent } from './dmn-modeler/dmn-modeler.component';

const routes: Routes = [
  { path: "", component: CmmnModelerComponent },
  { path: "dmn", component: DmnModelerComponent },
   { path: "xmlViewer", component: XmlViewerComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
