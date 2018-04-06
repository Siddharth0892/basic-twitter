import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-search',
  templateUrl: './tweet-search.component.html',
  styleUrls: ['./tweet-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetSearchComponent implements OnInit {
  tweets = [];
  users = [];
  constructor(private http: HttpClient) {
   
  }
  ngOnInit() {
  }
  searchByHashTag(input) {
        this.http.get('tweet/hashtag/'+input.value).subscribe((response) => {
      this.tweets = Object.values(response);
    });
  }
  searchByUserName(input) {
    this.http.get('tweet/user/'+input.value).subscribe((response) => {
console.log(response);
      this.users =Array.of(response); 

    });
  }
}
