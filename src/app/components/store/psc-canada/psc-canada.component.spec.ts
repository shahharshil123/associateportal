import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PscCanadaComponent } from './psc-canada.component';

describe('PscCanadaComponent', () => {
  let component: PscCanadaComponent;
  let fixture: ComponentFixture<PscCanadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PscCanadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PscCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
