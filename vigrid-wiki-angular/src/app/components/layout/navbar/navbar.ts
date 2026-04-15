import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponService,
  CardService,
  CharacterService,
  EnemiesService,
  BossService,
  GodService,
  RuneService
} from '../../../Services/_serviceExport';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  sidebarOpen: boolean = false;
  isDropdownOpen: boolean = false;
  filteredResults: string[] = [];
  focusedIndex: number = -1;
  constructor(
    private BossService: BossService,
    private EnemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    private runeService: RuneService,
    private cardService: CardService
  ) { }
  onKeyDown(event: KeyboardEvent, inputElement: HTMLInputElement) {
    if (!this.isDropdownOpen || this.filteredResults.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault(); // Megakadályozzuk a kurzor ugrálását az inputban
      this.focusedIndex = (this.focusedIndex + 1) % this.filteredResults.length;
    } 
    else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + this.filteredResults.length) % this.filteredResults.length;
    } 
    else if (event.key === 'Enter') {
      if (this.focusedIndex > -1) {
        this.itemSelected(this.filteredResults[this.focusedIndex], inputElement);
      }
    } 
    else if (event.key === 'Escape') {
      this.isDropdownOpen = false;
      inputElement.blur();
    }
  }
  refreshPage() {
  window.location.reload();
}
  onSearch(event: any) {
    this.focusedIndex = -1;
    const term = event.target.value.toLowerCase();
    if (!term) {
      this.filteredResults = [];
      this.isDropdownOpen = false;
      return;
    }
    const allAvailableItems = [
      ...this.BossService.getBosses().map(b => b.name),
      ...this.EnemiesService.getEnemies().map(e => e.name),
      ...this.characterService.getCharacters().map(c => c.name),
      ...this.weaponService.getWeapons().map(w => w.name),
      ...this.godService.getGods().map(g => g.name),
      ...this.runeService.getRunes().map(r => r.name),
      ...this.cardService.getCards().map(ca => ca.name)
    ];
    this.filteredResults = allAvailableItems.filter(name => name.toLowerCase().startsWith(term));
    this.isDropdownOpen = this.filteredResults.length > 0;
    this.updateService(term)
  }

  updateService(term: string) {
    this.BossService.ItemSelected(term);
    this.EnemiesService.ItemSelected(term);
    this.characterService.ItemSelected(term);
    this.weaponService.ItemSelected(term);
    this.godService.ItemSelected(term);
    this.runeService.ItemSelected(term);
    this.cardService.ItemSelected(term);
  }
  itemSelected(name: string,inputElement: HTMLInputElement) {
    inputElement.value = name;
    this.isDropdownOpen = false;
    this.focusedIndex = -1;
    this.updateService(name)
  }
}
