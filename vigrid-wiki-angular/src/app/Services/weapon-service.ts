import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  private weapons = [
    {
      name: 'Short Spear',
      description: 'A simple spear used by warriors.',
      image: 'Images/Weapons/Short_Spear.png',
      sizeDT: '3%', sizeMb: '12%', sizeMT: '7%'
    },
    {
      name: 'Ulfberht Sword',
      description: 'A high-quality sword from the Viking Age.',
      image: 'Images/Weapons/Ulfberht.png',
      sizeDT: '7%', sizeMb: '20%', sizeMT: '15%'
    },
    {
      name: 'Dane Axe',
      description: 'A heavy axe used in combat.',
      image: 'Images/Weapons/Dane_Axe.png',
      sizeDT: '9%', sizeMb: '24%', sizeMT: '21%'
    },
    {
      name: 'Seax',
      description: 'A versatile knife used for various tasks.',
      image: 'Images/Weapons/Seax.png',
      sizeDT: '7%', sizeMb: '36%', sizeMT: '27%'
    },
    {
      name: 'Shield',
      description: 'A defensive tool used to protect against attacks.',
      image: 'Images/Weapons/Shield.png',
      sizeDT: '7%', sizeMb: '20%', sizeMT: '15%'
    },
  ]
  private chosenWeapon = new BehaviorSubject<any>(null);
  currentItem = this.chosenWeapon.asObservable();
  ItemSelected(name: string) {
    const weapon = this.weapons.find(item => item.name === name);
    this.chosenWeapon.next(weapon);
  }
  getWeapons() {
    return this.weapons;
  }
}