import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListPurchasedComponent } from './course-list-purchased.component';

describe('CourseListPurchasedComponent', () => {
  let component: CourseListPurchasedComponent;
  let fixture: ComponentFixture<CourseListPurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListPurchasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
