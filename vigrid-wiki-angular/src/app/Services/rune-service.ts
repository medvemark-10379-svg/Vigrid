import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RuneService {
  private runes = [
    {
      name: 'Raido',
      description: "Raido represents the journey, signifying both physical travel and the rhythmic movement of life's path toward personal transformation.",
      image: 'Images/Runes/Raido_Rune.png',
      buff_name: 'Relentless Traveler',
      buff_desc: 'At the end of combat, heal 10% of your Max HP for every 5 turns the battle lasted.',
    },
    {
      name: 'Tiwaz',
      description: "The Tiwaz rune represents the spiritual warrior, symbolizing justice, victory through sacrifice, and the unwavering courage to follow one's principles.",
      image: 'Images/Runes/Tiwaz_Rune.png',
      buff_name: 'Victory Through Sacrifice',
      buff_desc: 'Lose 10% of your current HP to deal +50% Damage for the remainder of the turn.',
    },
    {
      name: 'Thurisaz',
      description: "Thurisaz represents the giant and the thorn, symbolizing raw destructive power, the breaking of obstacles, and defensive protection through conflict.",
      image: 'Images/Runes/Thurisaz_Rune.png',
      buff_name: 'Thorn in the Side',
      buff_desc: 'Whenever you are attacked, deal 25% of the damage received back to the attacker as Thorns.',
    },
    {
      name: 'Uruz',
      description: "Uruz represents the 'aurochs', symbolizing raw primal power, physical strength, endurance, and the untamed vitality of nature used for personal transformation.",
      image: 'Images/Runes/Uruz_Rune.png',
      buff_name: "Aurochs' Endurance",
      buff_desc: 'Reduce all incoming damage by 15% as long as your current HP is above 75%.',
    },
    {
      name: 'Algiz',
      description: "Algiz represents protection and divine connection, acting as a spiritual shield that safeguards one’s path and enhances intuitive awareness.",
      image: 'Images/Runes/Algiz_Rune.png',
      buff_name:'Intuitive Awareness'  ,
      buff_desc: 'You have a 15% chance to completely negate (0 damage) any incoming attack.',
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
