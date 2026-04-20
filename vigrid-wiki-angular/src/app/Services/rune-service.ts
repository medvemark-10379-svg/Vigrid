import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RuneService {
  private runes = [
    {
      name: 'Raido',
      description: 'xxx',
      image: 'Images/Runes/Raido_Rune.png',
    },

    {
      name: 'Tiwaz',
      description: '',
      image: 'Images/Runes/Tiwaz_Rune.png',
    },

    {
      name: 'Thurisaz',
      description: '',
      image: 'Images/Runes/Thurisaz_Rune.png',
    },

    {
      name: 'Uruz',
      description: '',
      image: 'Images/Runes/Uruz_Rune.png',
    },

    {
      name: 'Algiz',
      description: '',
      image: 'Images/Runes/Algiz_Rune.png',
    },
  ]
  private chosenRunes = new BehaviorSubject<any>(null);
  currentItem = this.chosenRunes.asObservable();

  ItemSelected(name: string) {
    const rune = this.runes.find(item => item.name === name);
    this.chosenRunes.next(rune);
  }
  ItemSelectedAll() {
    const allrune = this.runes;
    this.chosenRunes.next(allrune);
  }

  getRunes() {
    return this.runes;
  }
}
