import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Adding http client And adding public apis her in each method::
  constructor(private http :HttpClient) { }
  private baseUrl:string ="https://localhost:7125/api/User/"
  //https://localhost:7176/api/User/



  signup(user:any):Observable<any>{
    const url = `${this.baseUrl}Registration`;
    return this.http.post<any>(url, user);
  // return this.http.post<any>(`${this.baseUrl}regristration`,user)
  }
  
  
  login(loginobj:any){
  return this.http.post<any>(`${this.baseUrl}authenticate`,loginobj)
  }

  

//It is a public Api From internet:
// This is the public Api link for the header to the top treanding crunnecy...
  getTrendingCrunnecy(crunnecy:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crunnecy}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }



//It is a public Api From internet:
//   getCrunnecy(crunnecy:string){
// return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${crunnecy}&order=market_cap_desc&sparkline=false`);
//   }

  // getGrapiclaCrunnecyData(coinId:string,crunnecy:string, days:number){
  //   return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${crunnecy}&days=${days}`)
  // }
  //  getCrunnecyById(coinId:string){
  //  return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  // }
}

