import { Component,EventEmitter,Input,Output } from '@angular/core';
import { CurrInfo } from '../Models/CurrInfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 searchText :string='';
 @Input() currarray : CurrInfo[]=[];

}
