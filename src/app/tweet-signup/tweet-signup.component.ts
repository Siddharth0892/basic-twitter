import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet-signup',
  templateUrl: './tweet-signup.component.html',
  styleUrls: ['./tweet-signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TweetSignupComponent implements OnInit {
  message = "You have successfully signed up";
  constructor(private http: HttpClient, private router: Router) {
  console.log('inside sign up');
  }
  ngOnInit() {
  }
  onSignUp(input) {
   
  }

}
