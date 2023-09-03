import { Component, Input } from '@angular/core';
import { IProdect } from 'src/app/shared/Models/IProdect';
import { IPagnation } from 'src/app/shared/Models/Pagnation';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
 @Input() prodects:IProdect;
}
