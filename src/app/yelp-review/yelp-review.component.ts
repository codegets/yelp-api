import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-yelp-review',
  templateUrl: './yelp-review.component.html',
  styleUrls: ['./yelp-review.component.scss']
})
export class YelpReviewComponent implements OnInit {
  @Input() review: any;
  constructor() { }

  ngOnInit(): void {
  }

}
