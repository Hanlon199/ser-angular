import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
	elementSelected: string;
  constructor() { }

  ngOnInit() {
  }

  showInfo(elementSelected:any){
    this.elementSelected = elementSelected == this.elementSelected ? 'close' : elementSelected;
  }

  checkIfSelected(elementSelected:any){
  	return elementSelected == this.elementSelected ? true : false;
  }

}
