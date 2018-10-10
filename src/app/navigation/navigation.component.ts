import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	currentPath:string;
  constructor() { 
  	let temp = window.location.pathname.split('/') 
  	this.currentPath = temp[1];
  }

  ngOnInit() {
  }

}
