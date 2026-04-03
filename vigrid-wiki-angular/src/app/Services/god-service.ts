import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GodService {
  private gods = [
    { name: 'Odin', description: 'Odin is the All-Father of the Aesir, a powerful seeker of knowledge who sacrificed his eye for ultimate wisdom.', image: 'Images/Gods/Odin.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Freyr', description: 'Freyr rules over rain and sunshine; he is often depicted with his golden boar, Gullinbursti', image: 'Images/Gods/Frey.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Thor', description: 'Thor is a fearless warrior who travels in a chariot pulled by two goats and fights giants to protect Asgard', image: 'Images/Gods/Thor.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Tyr', description: 'He is the bravest of the gods, known for losing his right hand to the wolf Fenrir.', image: 'Images/Gods/Tyr.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
    { name: 'Heimdall', description: 'He stands on the Bifröst bridge with his horn, Gjallarhorn, to warn the gods of approaching enemies.', image: 'Images/Gods/Heimdall.png',sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },
  ]
  private chosenGod = new BehaviorSubject<any>(null);
  currentItem=this.chosenGod.asObservable();

  ItemSelected(name:string){
    const god = this.gods.find(item => item.name === name);
    this.chosenGod.next(god);
  }

  getBosses() {
    return this.gods;
  }
}