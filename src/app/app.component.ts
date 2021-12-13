import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {YelpService} from "./yelp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data: any;
  comments: any

  constructor(private yelp: YelpService) {
  }
  ngOnInit(): void {
    this.yelp.getData('coffee').subscribe((val: any) =>{
      this.data =  val?.jsonBody?.businesses;
      this.getComments(this.data[0]);
    })
  }
  getComments(data: any){
    this.yelp.getComments(data.id).subscribe((data: any)=>{
      this.comments = data?.jsonBody?.reviews;
    })
  }


}
