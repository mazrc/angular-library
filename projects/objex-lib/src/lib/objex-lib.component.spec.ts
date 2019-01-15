import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjexLibComponent } from './objex-lib.component';

describe('ObjexLibComponent', () => {
  let component: ObjexLibComponent;
  let fixture: ComponentFixture<ObjexLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjexLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjexLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
