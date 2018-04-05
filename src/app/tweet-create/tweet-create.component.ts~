import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-create',
  templateUrl: './tweet-create.component.html',
  styleUrls: ['./tweet-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetCreateComponent implements OnInit {

  tweet = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTweet() {
    this.http.post('/tweet', this.tweet)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/tweet-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
