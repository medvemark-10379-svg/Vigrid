import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerBosses } from './aside-container-bosses';

describe('AsideContainerBosses', () => {
  let component: AsideContainerBosses;
  let fixture: ComponentFixture<AsideContainerBosses  >;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainerBosses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideContainerBosses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
