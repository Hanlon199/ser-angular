//our root app component
import 'jquery';
import { Component, ElementRef, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery'
import 'moment';
import 'fullcalendar';
@Component({
  selector: 'my-app',
  styleUrls: ['../app.component.css'],
  template: `
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.1/fullcalendar.min.css" />
    <div class="container">
      <label id="hey" for="picker">Event Color: </label>
      <input type="color" name="picker" [(ngModel)]="calOptions.eventColor" (change)="eventColorChanged($event)">
      
      <div class="row" style="margin-top: 8px">
        <div class="col-md-12">
        
          <button class="btn btn-success btn-sm" (click)="add()">+</button>
        
        </div>
      </div>
      
      <div>
        <div class="col-xs-12">
          <div id='calendar' ></div>
        </div>
      </div>
    
    </div>  
  `,
})
export class Calendar implements OnInit {
  eventColor = "#ffec00";
  calElement = null;
  log: string[] = [];
  eventlist: any[] = [
        {
            title  : 'test title',
            description  : 'event1',
            start  : '2018-10-07 13:00',
            end    : '2018-10-07 17:00',
            type: 'event'
        },
        {
            title  : '',
            description: 'event2',
            start  : '2018-10-05 10:00',
            end    : '2018-10-07',
            type: 'staff'
        },
        {
            title  : '',
            description: 'event3',
            start  : '2018-10-09T12:30:00',
            allDay : false, // will make the time show
            type: 'meeting'
        }
      ];
  
  calOptions = {
      header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,basicWeek,basicDay listWeek'
			},
		defaultView: 'month',
		eventColor: this.eventColor,
      	events: this.eventlist,
      	eventRender: (event, element) => {
        	// this.log.push("Rendering Event");
//         	$(element).html("<button type="button" class="btn btn-outline-secondary mr-2" placement="left" ngbTooltip="Tooltip on left">
//   Tooltip on left
// </button>");
      	},
      	eventClick: function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);
        
        // change the border color just for fun
        $(this).css('border-color', 'blue');

      }
    };	
  
  constructor() { }
  
  ngOnInit() {
    this.log.push("Start of ngOnInit()");    
    this.calElement = $('#calendar');

    this.calElement.fullCalendar(this.calOptions);
    this.log.push("End of ngOnInit()");
  }
  
  next() {
    this.calElement.fullCalendar('next');
  }
  prev() {
    this.calElement.fullCalendar('prev');
  }
  add() {
    var newEvent = {
      title: 'New Event',
      start: '2016-12-10',
      description: "Added Event",
      type: 'eVenT'
    };
    this.eventlist.push(newEvent);
    this.calElement.fullCalendar( 'renderEvent', newEvent);
  }
  eventColorChanged(clickevent) {
    this.calElement.fullCalendar( 'destroy' );
    this.calElement.fullCalendar(this.calOptions);
  }
  
  
}