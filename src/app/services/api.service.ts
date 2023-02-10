import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Adding http client And adding public apis her in each method::
  constructor(private http :HttpClient) { }

//It is a public Api From internet:
//   getCrunnecy(crunnecy:string){
// return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crunnecy}&order=market_cap_desc&sparkline=false`);
//   }

// This is the Api link to the header...
  getTrendingCrunnecy(crunnecy:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crunnecy}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  // getGrapiclaCrunnecyData(coinId:string,crunnecy:string, days:number){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${crunnecy}&days=${days}`)
  // }
  //  getCrunnecyById(coinId:string){
  //  return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  // }


}
