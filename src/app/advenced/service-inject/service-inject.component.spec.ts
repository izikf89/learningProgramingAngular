import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInjectComponent } from './service-inject.component';

describe('ServiceInjectComponent', () => {
  let component: ServiceInjectComponent;
  let fixture: ComponentFixture<ServiceInjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
