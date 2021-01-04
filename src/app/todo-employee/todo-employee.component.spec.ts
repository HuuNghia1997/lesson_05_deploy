import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEmployeeComponent } from './todo-employee.component';

describe('TodoEmployeeComponent', () => {
  let component: TodoEmployeeComponent;
  let fixture: ComponentFixture<TodoEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
