import { Component, signal } from '@angular/core';
import { Aside } from './components/layout/aside/aside';
import { Home } from './components/Features/home/home';
import { Navbar } from './components/layout/navbar/navbar';
import { AsideContainerCharacter } from "./components/Features/aside-container-characters/aside-container-character";
import { AsideContainerWeapon } from "./components/Features/aside-container-weapons/aside-container-weapon";
import { AsideContainerBosses } from './components/Features/aside-container-bosses/aside-container-bosses';
import { AsideContainerEnemies } from "./components/Features/aside-container-enemies/aside-container-enemies";
import { AsideContainerGods } from "./components/Features/aside-container-gods/aside-container-gods";
@Component({
  selector: 'app-root',
  imports: [
    Navbar, Aside,
    Home, AsideContainerCharacter, AsideContainerWeapon, AsideContainerBosses, AsideContainerEnemies,
    AsideContainerGods
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
isCharactersVisible = false;
isWeaponsVisible = false;
isBossesVisible = false
isEnemiesVisible = false;
isGodsVisible = false;

toggleSelection(section: string) {
    this.isCharactersVisible = false;
    this.isWeaponsVisible = false;
    this.isBossesVisible = false;
    this.isEnemiesVisible = false;
    this.isGodsVisible = false;

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
    }
  }
}
