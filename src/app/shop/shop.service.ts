import { Injectable, OnInit } from '@angular/core';
import { IProdect } from '../shared/Models/IProdect';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagnation } from '../shared/Models/Pagnation';
import { ICategory } from '../shared/Models/ICategory';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopService implements OnInit {
  baseURL:string="https://localhost:44391/api";
  prodect :IProdect[];
  constructor(private httpClient:HttpClient){}
  getProdect(categoryId?:number,sort?:string,pageNumber?:number,pageSize?:number,serach?:string){
    let params=new HttpParams();
if(categoryId){
params=  params.append('categoryId',categoryId.toString())
}
if (sort){
  params=params.append('sort',sort.toString())
}
if(serach){
 params=params.append('serach',serach)
}
 params=params.append('pageNumber',pageNumber)
params=params.append('pageSize',pageSize)
      return this.httpClient.get<IPagnation>(this.baseURL+"/Prodects/get-all-prodect/",{observe:'response',params})
    .pipe(
      map(res=>{
        return res.body;
      })
    )
    }
    getCategories(){
      return this.httpClient.get<ICategory[]>(this.baseURL+"/Categories/get-all-category")
    }
  ngOnInit(): void {
    
  }
}
