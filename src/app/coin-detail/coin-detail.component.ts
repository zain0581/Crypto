import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent {
  constructor( private api :ApiService)   { 
  }
  coins :any =[];
  ngOnInit():void{
    // calling the uder methods to see  Arrays with data in aplictaion inspect 
   
    this.getalldata();
    // this.getalldata();
      }


  getalldata() {
    this.api.getCrunnecy("USD")
    .subscribe((data: Coin[]) => {
      this.coins = data;
         // assigning the fetched data to the coins array
      });
  }
  }
  


interface Coin {
  name: string;
  symbol: string;
  marketCap: number;
  volume24h: number;
  change24h: number;
}
