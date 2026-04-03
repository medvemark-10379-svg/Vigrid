import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerCharacter } from './aside-container-character';

describe('AsideContainerCharacter', () => {
  let component: AsideContainerCharacter;
  let fixture: ComponentFixture<AsideContainerCharacter>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainerCharacter ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideContainerCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
