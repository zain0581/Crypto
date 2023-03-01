// import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent {
  coins :any =[];
bannerData:any = [];
// dataSource!: MatTableDataSource<any>;
// displayedColumns:string[]=['Symbol','currentprice','price change','marketcap24']

// @ViewChild(MatPaginator) paginator!: MatPaginator;
// @ViewChild(MatSort) sort!: MatSort;


  /**
   calling Api methodds
   */
  constructor( private api :ApiService)   { 
  }
  ngOnInit():void{
// calling the uder methods to see  Arrays with data in aplictaion inspect 
this.getbannerData();
this.getalldata();
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

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }


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
