import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
@Input() name: any;
@Input() symbol : string = '';
}
