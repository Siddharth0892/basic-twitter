import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetComponent implements OnInit {
  tweets = [];
  constructor(private http: HttpClient) {
    this.http.get('/tweet').subscribe((response) => {
      this.tweets = Object.values(response);
    });
  }
  ngOnInit() {
  }
  addTweet(input) {
    this.http.post('/tweet', { "title": input.value }).subscribe((response) => {
      var tweet = { id: this.tweets.length + 1, title: input.value , tweetId : response["_id"] };
      this.tweets.unshift(tweet);
    });
  }
  removeTweet(tweet) {
    this.http.delete('/tweet/'+tweet["tweetId"]).subscribe((response) => {
      var index = this.tweets.indexOf(tweet);
      this.tweets.splice(index, 1);
    });
  }
}
