import { Component } from '@angular/core';
import { WeaponService } from '../../../Services/weapon-service';
import { CharacterService } from '../../../Services/character-service';
import { EnemiesService } from '../../../Services/enemies-service';
import { BossService } from '../../../Services/boss-service';
import { GodService } from '../../../Services/god-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  sidebarOpen: boolean = false;
constructor(private BossService: BossService,
    private EnemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService
  ){}
onSearch(event: any) {
  const term = event.target.value;
  this.BossService.ItemSelected(term);
  this.EnemiesService.ItemSelected(term);
  this.characterService.ItemSelected(term);
  this.weaponService.ItemSelected(term);
  this.godService.ItemSelected(term);
}
}
