import { Component, Input } from '@angular/core';
import { CurrInfo } from '../Models/CurrInfo';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent {
 @Input() currarray : CurrInfo[]=[];
}
