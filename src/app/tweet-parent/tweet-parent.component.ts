import { Component, OnInit, ViewEncapsulation , Input, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-parent',
  templateUrl: './tweet-parent.component.html',
  styleUrls: ['./tweet-parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetParentComponent implements OnInit {

  likesCount : number;
	isLiked : boolean;
tweets: any;
  tweet: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/tweet').subscribe(data => {
      console.log(data);
      this.tweets = data;
    });
  }


onLikingTweet(tweet){
console.log('Inside parent component' + event);
 this.http.get('/tweet/'+this.tweet._id).subscribe(data => {
      this.likesCount = data['likesCount'];
      this.isLiked = data['isLiked'];
      this.tweet = data;
    }, (err) => {
          console.log(err);
        });
}
}
