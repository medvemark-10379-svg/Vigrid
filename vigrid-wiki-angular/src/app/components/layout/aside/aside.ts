import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  @Output() linkClickedCharacter = new EventEmitter<void>();
  @Output() linkClickedWeapons = new EventEmitter<void>();
  @Output() linkClickedBosses = new EventEmitter<void>();
  @Output() linkClickedEnemies = new EventEmitter<void>();
  @Output() linkClickedGods = new EventEmitter<void>();
  @Output() linkClickedRunes = new EventEmitter<void>();
}