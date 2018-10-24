import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-multiple',
  templateUrl: 'ngbd-datepicker.component.html',
  styles: [`
    select.custom-select {
      margin: 0.5rem 0.5rem 0 0;
      width: auto;
    }
  `]
})
export class NgbdDatepickerComponent {

  displayMonths = 2;  
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
}