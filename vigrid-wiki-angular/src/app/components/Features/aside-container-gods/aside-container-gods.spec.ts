import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerGods } from './aside-container-gods';

describe('AsideContainerGods', () => {
  let component: AsideContainerGods;
  let fixture: ComponentFixture<AsideContainerGods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainerGods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideContainerGods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
