import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnExaComponent } from './btn-exa.component';

describe('BtnExaComponent', () => {
  let component: BtnExaComponent;
  let fixture: ComponentFixture<BtnExaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnExaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnExaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
