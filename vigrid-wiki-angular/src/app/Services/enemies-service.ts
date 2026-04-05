import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnemiesService {
  private enemies = [
    {
      name: 'Draugr',
      description: 'Undead warrior from the Norse mythology.',
      image: 'Images/Enemies/Draugr.png',
      sizeMb: '44%', sizeDT: '30%', sizeMT: '36%'
    },

    {
      name: 'Wolves',
      description: 'Pack of wild wolves.',
      image: 'Images/Enemies/Wolf.png',
      sizeMb: '44%', sizeDT: '30%', sizeMT: '36%'
    },

    {
      name: 'Snakes',
      description: 'Venomous snakes lurking in the shadows.',
      image: 'Images/Enemies/Snakes.png',
      sizeMb: '44%', sizeDT: '30%', sizeMT: '36%'
    },

    {
      name: 'Jotnar',
      description: 'Giant beings from Norse mythology.',
      image: 'Images/Enemies/Jotun.png',
      sizeMb: '44%', sizeDT: '30%', sizeMT: '36%'
    },

    {
      name: 'Muspels Synir',
      description: 'Fire giant, servant of Surtr.',
      image: 'Images/Enemies/Muspell_Synir.png',
      sizeMb: '44%', sizeDT: '23%', sizeMT: '33%'
    },
  ]
  private chosenEnemy = new BehaviorSubject<any>(null);
  currentItem = this.chosenEnemy.asObservable();

  ItemSelected(name: string) {
    const enemy = this.enemies.find(item => item.name === name);
    this.chosenEnemy.next(enemy);
  }

  getEnemies() {
    return this.enemies;
  }
}
