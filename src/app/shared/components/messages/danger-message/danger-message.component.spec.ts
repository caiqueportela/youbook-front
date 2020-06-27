import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerMessageComponent } from './danger-message.component';

describe('DangerMessageComponent', () => {
  let component: DangerMessageComponent;
  let fixture: ComponentFixture<DangerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
