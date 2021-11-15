import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenCombustibleComponent } from './gen-combustible.component';

describe('GenCombustibleComponent', () => {
  let component: GenCombustibleComponent;
  let fixture: ComponentFixture<GenCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenCombustibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
