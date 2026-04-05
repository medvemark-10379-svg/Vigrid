import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import { 
  BossService, 
  EnemiesService, 
  CharacterService, 
  WeaponService, 
  GodService, 
  RuneService 
} from '../../../Services/_serviceExport';

@Component({
  selector: 'app-home',
  imports: [HomePage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data: any = null;
  constructor(
    private bossService: BossService,
    private enemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    private runeService: RuneService,
  ) { }
  ngOnInit() {
    this.bossService.currentItem.subscribe(res => {
      if (res) this.data = res;
    });
    this.enemiesService.currentItem.subscribe(res => {
      if (res) this.data = res;
    });
    this.characterService.currentItem.subscribe(res => {
      if (res) this.data = res;
    });
    this.weaponService.currentItem.subscribe(res => {
      if (res) this.data = res;
    });
    this.godService.currentItem.subscribe(res => {
      if (res) this.data = res;
    });
    this.runeService.currentItem.subscribe(res => {
      if (res) this.data = res;
    })
  }
}
