import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  private bosses = [
    { name: 'Hel', description: 'Boss of the underworld, daughter of Loki.', image: 'Images/Bosses/Hel.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Fenrir', description: 'Giant wolf, son of Loki.', image: 'Images/Bosses/Fenrir.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Jörmungandr', description: 'World serpent, son of Loki.', image: 'Images/Bosses/Jörmungandr.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Loki', description: 'Trickster god, father of the other bosses.', image: 'Images/Bosses/Loki.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Surtr', description: 'Fire giant, foretold to set the world ablaze during Ragnarok.', image: 'Images/Bosses/Surtr.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
  ]
  private chosenBoss = new BehaviorSubject<any>(null);
  currentItem=this.chosenBoss.asObservable();

  ItemSelected(name:string){
    const boss = this.bosses.find(item => item.name === name);
    this.chosenBoss.next(boss);
  }

  getBosses() {
    return this.bosses;
  }
}
