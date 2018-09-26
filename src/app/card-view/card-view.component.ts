import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  // templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  template: `
  	<div>
		<div class="card card-info" style="width: 16em;">
		<img class="card-img-top" src="{{imageSrc}}" alt="Card image cap">
		<label class="card-header display-small" style="text-align: center;">{{header}}</label>
			<div class="card-body">
				<p class="card-text">
					{{comment}}
				</p>
			</div>
		</div>
	</div>
  `
})
export class CardViewComponent {
	@Input() header:string;
	@Input() comment:string;
	@Input() imageSrc:string;
  	// constructor() {}
	

}
