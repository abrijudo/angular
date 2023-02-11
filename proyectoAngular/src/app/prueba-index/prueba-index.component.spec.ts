import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaIndexComponent } from './prueba-index.component';

describe('PruebaIndexComponent', () => {
  let component: PruebaIndexComponent;
  let fixture: ComponentFixture<PruebaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
