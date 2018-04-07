import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet-login.component.html',
  styleUrls: ['./tweet-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetLoginComponent implements OnInit {
  tweets = [];
 message = "";
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
   
  }
  ngOnInit() {
  }
  onLogin(username, password) {

this.http.post('/tweet/login/', {"userName" : username.value, "pass" : password.value}).subscribe((response) => {

	console.log(response);
    this.router.navigate(['/tweets']);
});
  }
}
