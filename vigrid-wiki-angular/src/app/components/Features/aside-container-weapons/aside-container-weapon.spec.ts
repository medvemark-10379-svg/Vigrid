import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerWeapon } from './aside-container-weapon';

describe('AsideContainerWeapon', () => {
  let component: AsideContainerWeapon;
  let fixture: ComponentFixture<AsideContainerWeapon >;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainerWeapon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideContainerWeapon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
