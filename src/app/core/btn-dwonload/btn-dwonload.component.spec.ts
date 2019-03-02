import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDwonloadComponent } from './btn-dwonload.component';

describe('BtnDwonloadComponent', () => {
  let component: BtnDwonloadComponent;
  let fixture: ComponentFixture<BtnDwonloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDwonloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDwonloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
