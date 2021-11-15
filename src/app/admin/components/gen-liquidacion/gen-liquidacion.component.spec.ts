import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenLiquidacionComponent } from './gen-liquidacion.component';

describe('GenLiquidacionComponent', () => {
  let component: GenLiquidacionComponent;
  let fixture: ComponentFixture<GenLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenLiquidacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
