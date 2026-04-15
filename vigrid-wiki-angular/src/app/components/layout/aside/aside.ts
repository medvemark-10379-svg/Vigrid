import { Component, Output, EventEmitter } from '@angular/core';
import { CardService,Changelog } from '../../../Services/_serviceExport';


@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  constructor(private cardService: CardService) { }
  @Output() linkClickedCharacter = new EventEmitter<void>();
  @Output() linkClickedWeapons = new EventEmitter<void>();
  @Output() linkClickedBosses = new EventEmitter<void>();
  @Output() linkClickedEnemies = new EventEmitter<void>();
  @Output() linkClickedGods = new EventEmitter<void>();
  @Output() linkClickedRunes = new EventEmitter<void>();

  onCardsClick() {
    this.cardService.ItemSelectedAll();
  }
}