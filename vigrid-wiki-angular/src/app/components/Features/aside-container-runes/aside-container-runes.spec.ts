import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideContainerRunes } from './aside-container-runes';

describe('AsideContainerRunes', () => {
  let component: AsideContainerRunes;
  let fixture: ComponentFixture<AsideContainerRunes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideContainerRunes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideContainerRunes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
