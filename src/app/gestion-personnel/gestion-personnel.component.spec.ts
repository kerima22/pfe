import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonnelComponent } from './gestion-personnel.component';

describe('GestionPersonnelComponent', () => {
  let component: GestionPersonnelComponent;
  let fixture: ComponentFixture<GestionPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
