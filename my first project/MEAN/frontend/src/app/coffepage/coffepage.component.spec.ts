import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffepageComponent } from './coffepage.component';

describe('CoffepageComponent', () => {
  let component: CoffepageComponent;
  let fixture: ComponentFixture<CoffepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
