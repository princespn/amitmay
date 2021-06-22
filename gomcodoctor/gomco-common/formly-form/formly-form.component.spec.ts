import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormlyFormComponent } from './formly-form.component';

describe('FormlyFormComponent', () => {
  let component: FormlyFormComponent;
  let fixture: ComponentFixture<FormlyFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
