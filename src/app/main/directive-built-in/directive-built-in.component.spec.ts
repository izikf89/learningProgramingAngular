import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBuiltInComponent } from './directive-built-in.component';

describe('DirectiveBuiltInComponent', () => {
  let component: DirectiveBuiltInComponent;
  let fixture: ComponentFixture<DirectiveBuiltInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveBuiltInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveBuiltInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
