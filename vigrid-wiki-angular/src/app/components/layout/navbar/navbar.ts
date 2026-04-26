import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { 
  BossService, 
  EnemiesService, 
  CharacterService, 
  WeaponService, 
  GodService, 
  RuneService, 
  CardService 
} from '../../../Services/_serviceExport';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  sidebarOpen: boolean = false;
  isDropdownOpen: boolean = false;
  filteredResults: string[] = [];
  focusedIndex: number = -1;
  private allAvailableNames: string[] = [];

  constructor(
    private bossService: BossService,
    private enemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    private runeService: RuneService,
    private cardService: CardService,
  ) { }

  ngOnInit(): void {
    // Adatok betöltése az összes szervizből egyszerre
    forkJoin({
      bosses: this.bossService.getBosses(),
      enemies: this.enemiesService.getEnemies(),
      chars: this.characterService.getCharacters(),
      weapons: this.weaponService.getWeapons(),
      gods: this.godService.getGods(),
      runes: this.runeService.getRunes(),
      cards: this.cardService.getCards()
    }).subscribe((data: any) => {
      this.allAvailableNames = [
        ...data.bosses.map((i: any) => i.name),
        ...data.enemies.map((i: any) => i.name),
        ...data.chars.map((i: any) => i.name),
        ...data.weapons.map((i: any) => i.name),
        ...data.gods.map((i: any) => i.name),
        ...data.runes.map((i: any) => i.name),
        ...data.cards.map((i: any) => i.name)
      ];
    });
  }

  onSearch(event: any) {
    this.focusedIndex = -1;
    const term = event.target.value.toLowerCase();

    if (!term) {
      this.filteredResults = [];
      this.isDropdownOpen = false;
      return;
    }

    this.filteredResults = this.allAvailableNames.filter(name =>
      name.toLowerCase().startsWith(term)
    );

    this.isDropdownOpen = this.filteredResults.length > 0;
  }

  updateService(term: string) {
    this.bossService.ItemSelected(term);
    this.enemiesService.ItemSelected(term);
    this.characterService.ItemSelected(term);
    this.weaponService.ItemSelected(term);
    this.godService.ItemSelected(term);
    this.runeService.ItemSelected(term);
    this.cardService.ItemSelected(term);
  }

  itemSelected(name: string, inputElement: HTMLInputElement) {
    inputElement.value = name;
    this.isDropdownOpen = false;
    this.focusedIndex = -1;
    this.updateService(name);
  }

  onKeyDown(event: KeyboardEvent, inputElement: HTMLInputElement) {
    if (!this.isDropdownOpen || this.filteredResults.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
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
}
