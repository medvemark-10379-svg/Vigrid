import { Component, Output, EventEmitter } from '@angular/core';
import { CardService,RuneService,Changelog } from '../../../Services/_serviceExport';


@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  constructor(private cardService: CardService, private runeService : RuneService) { }
  @Output() linkClickedCharacter = new EventEmitter<void>();
  @Output() linkClickedWeapons = new EventEmitter<void>();
  @Output() linkClickedBosses = new EventEmitter<void>();
  @Output() linkClickedEnemies = new EventEmitter<void>();
  @Output() linkClickedGods = new EventEmitter<void>();

  onCardsClick() {
    this.cardService.ItemSelectedAll();
  }
  onRunesClick(){
    this.runeService.ItemSelectedAll()
  }
}