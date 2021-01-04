import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ListState } from './../ListState';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-employee',
  templateUrl: './todo-employee.component.html',
  styleUrls: ['./todo-employee.component.scss']
})

export class TodoEmployeeComponent implements OnInit {
  @Select(ListState) animals$: Observable<string[]>;
  public select;
  public property = [];
  constructor() { }
  ngOnInit() {
    this.animals$.subscribe(data => {
      this.select = data;
      console.log(this.select.lastAdded);
    })
  }

}
