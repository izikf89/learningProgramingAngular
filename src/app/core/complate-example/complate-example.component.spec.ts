import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplateExampleComponent } from './complate-example.component';

describe('ComplateExampleComponent', () => {
  let component: ComplateExampleComponent;
  let fixture: ComponentFixture<ComplateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
