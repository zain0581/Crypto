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
  selectedCurrency: string ="USD";


  constructor(){
  
  }
  //valuter skifter
  sendCurrency(event:string){
    console.log(event);
  }

}
