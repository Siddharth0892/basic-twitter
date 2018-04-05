import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetDetailComponent implements OnInit {

  tweet = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getTweetDetail(this.route.snapshot.params['id']);
  }

  getTweetDetail(id) {
    this.http.get('/tweet/'+id).subscribe(data => {
      this.tweet = data;
    });
  }

  deleteTweet(id) {
    this.http.delete('/tweet/'+id)
      .subscribe(res => {
          this.router.navigate(['/tweets']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
