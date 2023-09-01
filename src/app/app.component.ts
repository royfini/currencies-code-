import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrInfo } from './Models/CurrInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'currapp';
  currArr: CurrInfo[] = [];
  constructor(public apiCaller: HttpClient) {
  }

  ngOnInit(): void {
    this.apiCaller.get('https://api.fastforex.io/currencies?').subscribe((data: any) => {

      for (let key in data.currencies) {
        let c = new CurrInfo();
        c.name = data.currencies[key];
        c.symbol = key;
        this.currArr.push(c);
      }

    }
    );
  }
}






