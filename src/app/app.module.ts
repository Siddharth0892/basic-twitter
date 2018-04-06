import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetSearchComponent } from './tweet-search/tweet-search.component';
import { MatInputModule } from '@angular/material/input';
import { TweetSignupComponent } from './tweet-signup/tweet-signup.component';
const appRoutes: Routes = [


 {
    path: 'tweets',
    component: TweetComponent,
    data: { title: 'Tweet List' }
  },

  {
    path: 'tweet/:id',
    component: TweetComponent,
    data: { title: 'Tweet By ID' }
  },
  {
    path: 'tweet/',
    component: TweetComponent,
    data: { title: 'Tweet Created' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetSearchComponent,
    TweetSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
