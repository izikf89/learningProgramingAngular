import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRouterOutletComponent } from './multi-router-outlet.component';

describe('MultiRouterOutletComponent', () => {
  let component: MultiRouterOutletComponent;
  let fixture: ComponentFixture<MultiRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
