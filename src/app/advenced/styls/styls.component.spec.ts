import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylsComponent } from './styls.component';

describe('StylsComponent', () => {
  let component: StylsComponent;
  let fixture: ComponentFixture<StylsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
