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
  constructor(
    private BossService: BossService,
    private EnemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    private runeService: RuneService,
    private cardService: CardService
  ) { }
  onSearch(event: any) {
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
    this.updateService(name)
  }
}
