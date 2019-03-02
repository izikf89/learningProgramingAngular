import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationMethodsComponent } from './animation-methods.component';

describe('AnimationMethodsComponent', () => {
  let component: AnimationMethodsComponent;
  let fixture: ComponentFixture<AnimationMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
