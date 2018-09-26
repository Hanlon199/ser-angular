import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.css']
})
export class NgbdCarouselBasicComponent implements OnInit {
	@Input() height: number;
	@Input() width: number;
	@Input() carsouelType: any;
	// images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
	imageSelect = [];
	images1 = ['src/includes/img/carousel_1.gif', 'src/includes/img/carousel_2.gif', 'src/includes/img/carousel_3.jpg', 'src/includes/img/carousel_4.jpg', 'src/includes/img/carousel_5.jpg'];
	images2 = ['src/includes/img/student_carousel_1.gif', 'src/includes/img/student_carousel_2.gif', 'src/includes/img/student_carousel_3.jpg', 'src/includes/img/student_carousel_4.jpg', 'src/includes/img/student_carousel_5.jpg'];

ngOnInit() {
  	this.imageSelect = this.carsouelType == 1 ? this.images1 : this.images2;
}

}
