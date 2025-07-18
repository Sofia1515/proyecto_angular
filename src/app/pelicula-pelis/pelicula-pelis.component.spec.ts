import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaPelisComponent } from './pelicula-pelis.component';

describe('PeliculaPelisComponent', () => {
  let component: PeliculaPelisComponent;
  let fixture: ComponentFixture<PeliculaPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculaPelisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
