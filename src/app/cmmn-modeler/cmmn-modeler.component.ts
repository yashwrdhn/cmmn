import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as CmmnJS from 'cmmn-js/lib/modeler';
import DmnJS from 'dmn-js/lib/modeler'; 
import { AppService } from '../app.service';

@Component({
  selector: 'app-cmmn-modeler',
  templateUrl: './cmmn-modeler.component.html',
  styleUrls: ['./cmmn-modeler.component.css']
})
export class CmmnModelerComponent {

  // private dmnModeler : DmnJS;
  private cmmnModeler : CmmnJS;

  @ViewChild('canvas', { static: true}) private el!: ElementRef;

  constructor(private route: Router, private appService : AppService){
    this.cmmnModeler = new CmmnJS();
    // this.dmnModeler = new DmnJS();
  }

  ngAfterContentInit(): void{
    this.cmmnModeler.attachTo(this.el.nativeElement);
    // this.dmnModeler.attachTo(this.el.nativeElement);
  }

  ngOnInit(): void{
    fetch('../assets/diagram.cmmn')
      .then(res => res.text())
      .then( xml => this.cmmnModeler.importXML(xml));

      // fetch('../assets/diagram.dmn')
      // .then(res => res.text())
      // .then( xml => this.dmnModeler.importXML(xml));
    
     
  }

  zoomIn() {
    this.cmmnModeler.get('zoomScroll').stepZoom(1);
  }
  zoomOut() {
      this.cmmnModeler.get('zoomScroll').stepZoom(-1);
  } 


  onClick(){
    var canvas = this.cmmnModeler.get('canvas');
    var overlays = this.cmmnModeler.get('overlays');


    // zoom to fit full viewport
    canvas.zoom('fit-viewport');
  }

  // viewXML(){
  //   this.cmmnModeler.saveXML().then(xml=>{
  //     this.cmmnModeler.setXML(xml.xml)
  //   });
  //   this.route.navigate(['/xmlViewer']);
  // }
}
