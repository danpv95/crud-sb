import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorreControlComponent } from './torre-control.component';

describe('TorreControlComponent', () => {
  let component: TorreControlComponent;
  let fixture: ComponentFixture<TorreControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorreControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorreControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
