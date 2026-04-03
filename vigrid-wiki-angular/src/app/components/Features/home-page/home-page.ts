import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../Services/character-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  character$: Observable<any>;
  constructor(private characterService: CharacterService) {
    this.character$ = this.characterService.currentItem;
  }
  ngOnInit(): void {
    this.characterService.setRandomCharacter();
  }
}
