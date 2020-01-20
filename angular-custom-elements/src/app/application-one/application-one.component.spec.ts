import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOneComponent } from './application-one.component';

describe('ApplicationOneComponent', () => {
  let component: ApplicationOneComponent;
  let fixture: ComponentFixture<ApplicationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
