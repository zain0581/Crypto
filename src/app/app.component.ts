import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
//value in mat input default *USD*
  // selectedCurrency: string ="USD";

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(){
  
  }
  getData() {
    return sessionStorage.getItem('Email');
  }
  //valuter skifter
  // sendCurrency(event:string){
  //   console.log(event);
  // }

}
