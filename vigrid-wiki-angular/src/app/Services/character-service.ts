import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters = [
    { name: 'Bondi', 
      description: 'A Bondi was a free landowning farmer who formed the backbone of Viking society, serving as a self-equipped warrior during times of conflict.', 
      image: 'Images/Characters/Bondi.png',
      sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },

    { name: 'Jarl', 
      description: 'A Jarl was a high-ranking noble or chieftain in Viking society who held significant territorial power, wealth, and a loyal following of warriors.', 
      image: 'Images/Characters/Jarl.png',
      sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },

    { name: 'Berserkr', 
      description: 'A fierce warrior who entered a state of uncontrollable rage in battle.', 
      image: 'Images/Characters/Berserkr.png',
      sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },

    { name: 'Shaman', 
      description: 'A spiritual leader who could communicate with the gods and predict the future.', 
      image: 'Images/Characters/Shaman.png',
      sizeDT:'25%',sizeMb:'45%',sizeMT:'35%' },

    { name: 'Ulfhednar', 
      description: 'A legendary warrior known for his strength and skill in battle.', 
      image: 'Images/Characters/Ulfhednar.png',
      SizeDT:'25 %',sizeMb:'45 %',sizeMT:'35 %' },
  ]
  private chosenCharacter = new BehaviorSubject<any>(null);
  currentItem=this.chosenCharacter.asObservable();

  ItemSelected(name:string){
    const character = this.characters.find(item => item.name === name);
    this.chosenCharacter.next(character);
  }

  getCharacters() {
    return this.characters;
  }
  setRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * this.characters.length);
  const randomChar = this.characters[randomIndex];
  this.chosenCharacter.next(randomChar);
}
}