import { Component, Input, } from '@angular/core';
import { CharacterService } from '../../../Services/character-service';

@Component({
  selector: 'app-aside-container-character',
  standalone: true,
  imports: [],
  templateUrl: './aside-container-character.html',
  styleUrls: ['./aside-container-character.css'],
})
export class AsideContainerCharacter {
  @Input() isVisible_ = false;
  constructor(private characterService: CharacterService) { }
  public window = window;
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  Bondi() {
    this.characterService.ItemSelected('Bondi');
  }
  Jarl() {
    this.characterService.ItemSelected('Jarl');
  }
  Berserkr() {
    this.characterService.ItemSelected('Berserkr');
  }
  Shaman() {
    this.characterService.ItemSelected('Shaman');
  }
  Ulfhednar() {
    this.characterService.ItemSelected('Ulfhednar');
  }
}
