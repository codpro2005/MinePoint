import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFailComponent } from './reset-password-fail.component';

describe('ResetPasswordFailComponent', () => {
  let component: ResetPasswordFailComponent;
  let fixture: ComponentFixture<ResetPasswordFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
