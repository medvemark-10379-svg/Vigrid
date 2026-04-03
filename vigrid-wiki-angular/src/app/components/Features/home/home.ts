import { Component} from '@angular/core';
import { BossService } from '../../../Services/boss-service';
import { EnemiesService } from '../../../Services/enemies-service';
import { CharacterService } from '../../../Services/character-service';
import { WeaponService } from '../../../Services/weapon-service';
import { GodService } from '../../../Services/god-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data : any = null;

  constructor(private BossService: BossService,
    private EnemiesService: EnemiesService,
    private characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService
  ){}
ngOnInit() {
  this.BossService.currentItem.subscribe(res => {
    if (res) this.data = res;
  });
  this.EnemiesService.currentItem.subscribe(res => {
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
}
}
