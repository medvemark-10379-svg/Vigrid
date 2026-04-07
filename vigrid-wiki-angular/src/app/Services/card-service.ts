import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cards = [
    {
      name: 'Sway',
      description: '',
      image: 'Images/Cards/Sway.png',
      damage: '',
      defensive: 'Blocks one attack.',
      stamina: 'Drains 2 Stamina',
      availableFor: ['Bondi', 'Shaman', 'Ulfhednar'],
    },

    {
      name: 'Sunder',
      description: '',
      image: 'Images/Cards/Sunder.png',
      damage: 'Deals 3 Damage',
      defensive: '',
      stamina: 'Drains 1 Stamina',
      availableFor: ['Bondi', 'Berserkr', 'Ulfhednar'],
    },

    {
      name: 'Eitr',
      description: '',
      image: 'Images/Cards/Eitr.png',
      damage: 'Deals 2 Damage per round.',
      defensive: '',
      stamina: 'Drains 1 Stamina',
      availableFor: ['Shaman'],
    },

    {
      name: 'Frenzy',
      description: '',
      image: 'Images/Cards/Frenzy.png',
      damage: 'Deals 5 Damage',
      defensive: '',
      stamina: 'Drains 2 Stamina',
      availableFor: ['Ulfhednar', 'Berserkr'],
    },

    {
      name: 'Gash',
      description: '',
      image: 'Images/Cards/Gash.png',
      damage: 'Deals X Damage per round.',
      defensive: '',
      stamina: 'Drains 2 Stamina.',
      availableFor: ['Shaman'],
    },

    {
      name: 'Guard',
      description: '',
      image: 'Images/Cards/Guard.png',
      damage: '',
      defensive: 'Gives 3 defense to yourself.',
      stamina: 'Drains 1 Stamina',
      availableFor: ['Bondi', 'Berserkr', 'Jarl', 'Ulfhednar'],
    },
    {
      name: 'Rooted',
      description: '',
      image: 'Images/Cards/Rooted.png',
      damage: '',
      defensive: 'Stuns the enemy. The enemy skips a turn.',
      stamina: 'Drains 1 Stamina',
      availableFor: ['Shaman'],
    },
  ]
  private chosenCard = new BehaviorSubject<any>(null);
  currentItem = this.chosenCard.asObservable();

  ItemSelected(name: string) {
    const card = this.cards.find(item => item.name === name);
    this.chosenCard.next(card);
  }
  ItemSelectedAll() {
    const allcard = this.cards;
    this.chosenCard.next(allcard);
  }
  getCardsByCharacter(character: string) {
    return this.cards.filter(card => card.availableFor && card.availableFor.includes(character));
  }

  getCards() {
    return this.cards;
  }
}
