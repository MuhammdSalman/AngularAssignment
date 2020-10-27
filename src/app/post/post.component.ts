import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  constructor(http: HttpClient) { 
    http.get('http://JsonPlaceholder.typicode.com/posts')
    .subscribe(Response => {
      this.posts = Response;
      console.log("ABcd");
      console.log(Response);
    });
  }

  ngOnInit() {
    
  }

}
