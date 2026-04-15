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
      image: '',
    },

    {
      name: 'Tiwaz',
      description: '.',
      image: '',
    },

    {
      name: 'Thurisaz',
      description: '',
      image: '',
    },

    {
      name: 'Uruz',
      description: '',
      image: '',
    },

    {
      name: 'Algiz',
      description: '',
      image: '',
    },
  ]
  private chosenRune = new BehaviorSubject<any>(null);
  currentItem = this.chosenRune.asObservable();

  ItemSelected(name: string) {
    const rune = this.runes.find(item => item.name === name);
    this.chosenRune.next(rune);
  }

  getRunes() {
    return this.runes;
  }
}
