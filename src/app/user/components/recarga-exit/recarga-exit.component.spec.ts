import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargaExitComponent } from './recarga-exit.component';

describe('RecargaExitComponent', () => {
  let component: RecargaExitComponent;
  let fixture: ComponentFixture<RecargaExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargaExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargaExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
