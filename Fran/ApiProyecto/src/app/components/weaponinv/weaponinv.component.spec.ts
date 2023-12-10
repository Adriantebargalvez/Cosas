import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponinvComponent } from './weaponinv.component';

describe('WeaponinvComponent', () => {
  let component: WeaponinvComponent;
  let fixture: ComponentFixture<WeaponinvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponinvComponent]
    });
    fixture = TestBed.createComponent(WeaponinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
