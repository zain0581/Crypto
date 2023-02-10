import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent {

bannerData:any = [];

  /**
   calling Api methodds
   */
  constructor( private api :ApiService)   { 
  }
  ngOnInit():void{
// calling the uder methods to see  Arrays with data in aplictaion inspect 
this.getbannerData();
// this.getalldata();
  }

  //creating a new method and calling the method from services.ts fro terndingcrunnecy   
  getbannerData(){
  this.api.getTrendingCrunnecy("USD")
  .subscribe(res=>{
console.log(res);
//
this.bannerData=res;

  })
  }
}

//   getalldata(){
//     this.api.getCrunnecy("USD")
//     .subscribe(res=>{
// console.log(res);

//     })
//   }
  
// }
