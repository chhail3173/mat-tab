import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import { Component5Component } from '../component5/component5.component';

@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.css']
})
export class MatTabComponent implements OnInit {
  dynamicData:any;
  components:any = [];
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef }) entry:any = ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private httpClient: HttpClient) { 
    this.getComponent();
  }
  ngOnInit(): void {}
 
  getComponent() {
    this.httpClient.get("assets/dynamic.json").subscribe(data=>{
      this.dynamicData = data;
    })
  }

  getCmp(e:any) {
      for(let value of this.dynamicData){
      if(value.process === e.tab.textLabel){
        value.components.map((value:any, index:any)=>{
          if(index === 0) {
            this.entry.clear();
            const factory1 = this.resolver.resolveComponentFactory(Component1Component);
            this.componentRef = this.entry.createComponent(factory1);
            this.componentRef.instance.message = "Called by appComponent";
          }
          if(index === 1) {
            // this.entry.clear();
            const factory1 = this.resolver.resolveComponentFactory(Component2Component);
            this.componentRef = this.entry.createComponent(factory1);
            this.componentRef.instance.message = "Called by appComponent";
          }
          if(index === 2) {
            // this.entry.clear();
            const factory1 = this.resolver.resolveComponentFactory(Component3Component);
            this.componentRef = this.entry.createComponent(factory1);
            this.componentRef.instance.message = "Called by appComponent";
          }
          if(index === 3) {
            // this.entry.clear();
            const factory1 = this.resolver.resolveComponentFactory(Component4Component);
            this.componentRef = this.entry.createComponent(factory1);
            this.componentRef.instance.message = "Called by appComponent";
          }
          if(index === 4) {
            // this.entry.clear();
            const factory1 = this.resolver.resolveComponentFactory(Component4Component);
            this.componentRef = this.entry.createComponent(factory1);
            this.componentRef.instance.message = "Called by appComponent";
           }
        })
      }
    } 
  }
}
