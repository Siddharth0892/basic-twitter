import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-edit',
  templateUrl: './tweet-edit.component.html',
  styleUrls: ['./tweet-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetEditComponent implements OnInit {

  tweet: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTweet(this.route.snapshot.params['id']);
  }

  getTweet(id) {
    this.http.get('/tweet/'+id).subscribe(data => {
      this.tweet = data;
    });
  }

  updateTweet(id) {
    this.tweet.updated_date = Date.now();
    this.http.put('/tweet/'+id, this.tweet)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/tweet-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
