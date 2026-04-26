import { Component, Input } from '@angular/core';
import { WeaponService } from '../../../Services/weapon-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aside-container-weapon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-container-weapon.html',
  styleUrls: ['./aside-container-weapon.css'],
})
export class AsideContainerWeapon {
  @Input() isVisibleWeapons_ = false;
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private weaponService: WeaponService) { }
  public window = window;
  weapon$: Observable<any[]> | undefined;
  ngOnInit() {
    this.weapon$ = this.weaponService.getWeapons();
  }
  selectWeapon(name: string) {
    this.weaponService.ItemSelected(name);
  }
}
