import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCourseComponent } from './specific-course.component';

describe('SpecificCourseComponent', () => {
  let component: SpecificCourseComponent;
  let fixture: ComponentFixture<SpecificCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
