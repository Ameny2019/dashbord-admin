import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstampComponent } from './update-estamp.component';

describe('UpdateEstampComponent', () => {
  let component: UpdateEstampComponent;
  let fixture: ComponentFixture<UpdateEstampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEstampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
