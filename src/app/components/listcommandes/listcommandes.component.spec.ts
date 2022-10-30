import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandesComponent } from './listcommandes.component';

describe('ListcommandesComponent', () => {
  let component: ListcommandesComponent;
  let fixture: ComponentFixture<ListcommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
