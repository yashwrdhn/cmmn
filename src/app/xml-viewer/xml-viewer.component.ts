import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-xml-viewer',
  templateUrl: './xml-viewer.component.html',
  styleUrls: ['./xml-viewer.component.css']
})
export class XmlViewerComponent {
  public xml!: string
  constructor(
    private route: Router, 
    private appService: AppService) 
  { }
  ngOnInit(): void {
    this.xml = this.appService.getXMl()
    if(this.xml == undefined)
        this.xml = 'To design a workflow, go to the diagram page.'
  }
  viewDiagram(){
    this.route.navigate(['']);
  }
}
