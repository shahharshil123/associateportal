import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesupervisorComponent } from './managesupervisor.component';

describe('ManagesupervisorComponent', () => {
  let component: ManagesupervisorComponent;
  let fixture: ComponentFixture<ManagesupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagesupervisorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagesupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
