import { Component, OnInit, inject } from '@angular/core';
import { Aside } from './components/layout/aside/aside';
import { Navbar } from './components/layout/navbar/navbar';
import { Router } from '@angular/router';
import { Home } from './components/Features/home/home';
import {
  AsideContainerBosses,
  AsideContainerGods,
  AsideContainerEnemies,
  AsideContainerCharacter,
  AsideContainerWeapon
} from '../app/components/Features/_asideExport';
import {
  CardService,
  CharacterService,
  Changelog
} from './Services/_serviceExport';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar, Aside, Home,
    AsideContainerCharacter, AsideContainerWeapon, AsideContainerBosses, AsideContainerEnemies, AsideContainerGods,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router);
  constructor(private characterService: CharacterService, public cardService: CardService, private changelog: Changelog) { }
  ngOnInit() {
    this.router.navigate(['/']);
  }
  isCharactersVisible = false;
  isWeaponsVisible = false;
  isBossesVisible = false
  isEnemiesVisible = false;
  isGodsVisible = false;
  isRunesVisible = false;

  toggleSelection(section: string) {
    this.characterService.ItemSelected("");
    this.isCharactersVisible = false;
    this.isWeaponsVisible = false;
    this.isBossesVisible = false;
    this.isEnemiesVisible = false;
    this.isGodsVisible = false;
    this.isRunesVisible = false;

    if (section === 'char') {
      this.isCharactersVisible = true;
    } else if (section === 'weapons') {
      this.isWeaponsVisible = true;
    } else if (section === 'bosses') {
      this.isBossesVisible = true;
    } else if (section === 'enemies') {
      this.isEnemiesVisible = true;
    } else if (section === 'gods') {
      this.isGodsVisible = true;
    } else if (section === 'runes') {
      this.isRunesVisible = true;
    } else if (section === 'char') {
    }
  }
    onChangelogClick() {
    this.changelog.showChangelog();
  }
}
