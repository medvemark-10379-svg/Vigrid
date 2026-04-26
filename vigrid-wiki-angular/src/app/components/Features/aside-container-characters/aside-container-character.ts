import { Component, Input, } from '@angular/core';
import { CharacterService } from '../../../Services/character-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-container-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-container-character.html',
  styleUrls: ['./aside-container-character.css'],
})
export class AsideContainerCharacter {
  @Input() isVisible_ = false;
  constructor(public characterService: CharacterService) { }
  public window = window;
  character$: Observable<any[]> | undefined;
  ngOnInit() {
    this.character$ = this.characterService.getCharacters();
  }

  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  selectCharacter(name: string) {
    this.characterService.ItemSelected(name);
  }
}
