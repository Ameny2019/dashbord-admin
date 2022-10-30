import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentvalidationComponent } from './agentvalidation.component';

describe('AgentvalidationComponent', () => {
  let component: AgentvalidationComponent;
  let fixture: ComponentFixture<AgentvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
