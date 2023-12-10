import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteinvComponent } from './agenteinv.component';

describe('AgenteinvComponent', () => {
  let component: AgenteinvComponent;
  let fixture: ComponentFixture<AgenteinvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteinvComponent]
    });
    fixture = TestBed.createComponent(AgenteinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
