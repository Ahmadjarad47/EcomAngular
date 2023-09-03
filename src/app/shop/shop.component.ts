import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from './shop.service';
import { IProdect } from '../shared/Models/IProdect';
import { IPagnation } from '../shared/Models/Pagnation';
import { ICategory } from '../shared/Models/ICategory';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  @ViewChild('serach') Search:ElementRef;
  constructor(private httpService:ShopService){}
  prodect:IProdect[];
  category:ICategory[];
  categoryIdSelected=0;
  sortSeleceted:string;
  pageNumber:number=1;
  pageSize:number=5;
  serach:string;
  totalNumber:number;
  sortOption=[
    {name:'Name',value:'Name'},
    {name:'Price: Min-To-Max',value:'PriceAsync'},
    {name:'Price: Max-To-Min',value:'PriceDesc'}
  ]
  getProdect(){
    this.httpService.getProdect(this.categoryIdSelected,this.sortSeleceted,this.pageNumber,this.pageSize,this.serach).subscribe({
      next:(values:any)=>{
        this.prodect=values.data ;
        this.totalNumber=values.count;
        this.pageNumber=values.pageNumber
        this.pageSize=values.pageSize;
        
      },
      error:(res)=>{
        console.log(res.data)
      }
    })
  }
  getcategory(){
    this.httpService.getCategories().subscribe({
      next:((response)=>{
        this.category=[{id:0,name:'All',description:''},...response];
      })
    })
  }
  OnCategorySelect(categoryId?:number){
    this.categoryIdSelected=categoryId;
    this.getProdect();
  }
  sortSelect(sort:Event){
let sortvalue=(sort.target as HTMLInputElement).value;
this.sortSeleceted=sortvalue;
this.getProdect();
  }

  onPageChang(event:any){
this.pageNumber=event;
this.getProdect();
  }
  OnSerach(Serach:any){
    this.serach=Serach;
    this.getProdect();
  }





  getProdects(){
    this.httpService.getProdect(0,"",1,6,"").subscribe({
      next:(values:any)=>{
        this.prodect=values.data ;
        this.totalNumber=values.count;
        this.pageNumber=values.pageNumber
        this.pageSize=values.pageSize;
        
      },
      error:(res)=>{
        console.log(res.data)
      }
    })
  }
  Reset(){
    this.Search.nativeElement.value='';
    this.getProdects()
  }
  ngOnInit(): void {
  this.getProdect();
  this.getcategory()
  }

}
