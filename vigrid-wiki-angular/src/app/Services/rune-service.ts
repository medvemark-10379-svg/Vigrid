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
      sizeMb: '', sizeDT: '', sizeMT: ''
    },

    {
      name: '',
      description: '.',
      image: '',
      sizeMb: '', sizeDT: '', sizeMT: ''
    },

    {
      name: '',
      description: '',
      image: '',
      sizeMb: '', sizeDT: '', sizeMT: ''
    },

    {
      name: '',
      description: '',
      image: '',
      sizeMb: '', sizeDT: '', sizeMT: ''
    },

    {
      name: '',
      description: '',
      image: '',
      sizeMb: '', sizeDT: '', sizeMT: ''
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
