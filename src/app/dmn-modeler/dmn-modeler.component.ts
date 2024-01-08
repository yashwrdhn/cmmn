import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import DmnJS from 'dmn-js/lib/modeler'; 
import { AppService } from '../app.service';

@Component({
  selector: 'app-dmn-modeler',
  templateUrl: './dmn-modeler.component.html',
  styleUrls: ['./dmn-modeler.component.css']
})


export class DmnModelerComponent {


  private dmnModeler : DmnJS;

  @ViewChild('canvas', { static: true}) private el!: ElementRef;

  constructor(private route: Router, private appService : AppService){
    this.dmnModeler = new DmnJS();
  }

  ngAfterContentInit(): void{
    this.dmnModeler.attachTo(this.el.nativeElement);
  }

  ngOnInit(): void{
    fetch('../assets/diagram.dmn')
      .then(res => res.text())
      .then( xml => this.dmnModeler.importXML(xml)); 
  }

  zoomIn() {
    this.dmnModeler.get('zoomScroll').stepZoom(1);
  }
  zoomOut() {
      this.dmnModeler.get('zoomScroll').stepZoom(-1);
  } 

  onClick(){
    var canvas = this.dmnModeler.get('canvas');
    var overlays = this.dmnModeler.get('overlays');

    // zoom to fit full viewport
    canvas.zoom('fit-viewport');
  }

  // viewXML(){
  //   this.dmnModeler.saveXML().then(xml=>{
  //     this.dmnModeler.setXML(xml.xml)
  //   });
  //   this.route.navigate(['/xmlViewer']);
  // }
}
