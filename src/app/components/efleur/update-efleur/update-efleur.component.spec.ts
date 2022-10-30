import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEfleurComponent } from './update-efleur.component';

describe('UpdateEfleurComponent', () => {
  let component: UpdateEfleurComponent;
  let fixture: ComponentFixture<UpdateEfleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEfleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEfleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
