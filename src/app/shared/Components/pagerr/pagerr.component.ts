import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagerr',
  templateUrl: './pagerr.component.html',
  styleUrls: ['./pagerr.component.scss']
})
export class PagerrComponent {
@Input() totalNumber:number;
@Input() pageSize:number;
@Output() PageChang=new EventEmitter<number>();
onPageChang(event:any){
  this.PageChang.emit(event)
}
}
