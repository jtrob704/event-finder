import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box-main',
  templateUrl: './search-box-main.component.html',
  styleUrls: ['./search-box-main.component.scss']
})
export class SearchBoxMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log('Search Button Clicked!');
  }
}
