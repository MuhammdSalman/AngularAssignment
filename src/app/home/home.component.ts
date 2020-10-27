import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users$: any;
  id:any;
  title: any;
  body: any;
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(http: HttpClient) { 
    http.get('http://JsonPlaceholder.typicode.com/posts')
    .subscribe(Response => {
      this.users$ = Response;
      this.dtTrigger.next();
    });
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

  }
  detail(index:number)
  {
    //alert(index);
    this.id = index;
    this.title = this.users$[index].title;
    this.body = this.users$[index].body;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
