import { Component, OnInit, ViewEncapsulation ,  Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetComponent implements OnInit {
hashTag : string;
@Output('likeme') likeme = new EventEmitter();
  tweets: any;
  tweet: any = {};
@Input('likesCount') likesCount : number ;

@Input('isLiked') isLiked : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/tweet').subscribe(data => {
      console.log(data);
      this.tweets = data;
    });
  }


onClickLike(tweet){
console.log('emitting.....');
this.likeme.emit({tweet});
}


onSearchClick(){
var encodeduri = encodeURI(this.hashTag);
console.log(encodeduri);
console.log('inside Search click :' +this.hashTag);
this.http.get('/hashtag/'+encodeduri).subscribe(data => {
console.log(data);
});
}
}
