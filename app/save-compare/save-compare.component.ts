import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-compare',
  templateUrl: './save-compare.component.html',
  styleUrls: ['./save-compare.component.scss']
})
export class SaveCompareComponent implements OnInit {

	saveItemOne(n: number): any[] {
	    return Array(n);
	  }

	  saveItemTwo(n: number): number[] {
	    return [...Array(n).keys()];
	  }

  constructor() { }

  ngOnInit() {
  }

}
