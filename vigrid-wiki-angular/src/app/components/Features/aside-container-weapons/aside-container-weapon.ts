import { Component, Input } from '@angular/core';
import { WeaponService } from '../../../Services/weapon-service';
@Component({
  selector: 'app-aside-container-weapon',
  standalone: true,
  imports: [],
  templateUrl: './aside-container-weapon.html',
  styleUrls: ['./aside-container-weapon.css'],
})
export class AsideContainerWeapon {
  @Input() isVisibleWeapons_ = false;
    constructor(private weaponService: WeaponService){}
      Top(){
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    }
    ShortSpear(){
      this.weaponService.ItemSelected('Short Spear');
    }
    UlfberhtSword(){
      this.weaponService.ItemSelected('Ulfberht Sword');
    }
    DaneAxe(){
      this.weaponService.ItemSelected('Dane Axe');
    }
    Seax(){
      this.weaponService.ItemSelected('Seax');
    }
    Shield(){
      this.weaponService.ItemSelected('Shield');
    }
}
