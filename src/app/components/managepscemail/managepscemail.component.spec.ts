import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepscemailComponent } from './managepscemail.component';

describe('ManagepscemailComponent', () => {
  let component: ManagepscemailComponent;
  let fixture: ComponentFixture<ManagepscemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagepscemailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagepscemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
