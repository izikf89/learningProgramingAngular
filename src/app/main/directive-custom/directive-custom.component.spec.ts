import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCustomComponent } from './directive-custom.component';

describe('DirectiveCustomComponent', () => {
  let component: DirectiveCustomComponent;
  let fixture: ComponentFixture<DirectiveCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
