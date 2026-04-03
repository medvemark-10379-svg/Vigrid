import { Component, Input } from '@angular/core';
import { EnemiesService } from '../../../Services/enemies-service';

@Component({
  selector: 'app-aside-container-enemies',
  standalone: true,
  imports: [],
  templateUrl: './aside-container-enemies.html',
  styleUrls: ['./aside-container-enemies.css'],
})
export class AsideContainerEnemies {
  @Input() isEnemiesVisible_ = false;
    constructor(private enemiesService: EnemiesService){}
      Top(){
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    }
    Draugr(){
      this.enemiesService.ItemSelected('Draugr');
    }
    Wolves(){
      this.enemiesService.ItemSelected('Wolves');
    }
    Snakes(){
      this.enemiesService.ItemSelected('Snakes');
    }
    Jotnar(){
      this.enemiesService.ItemSelected('Jotnar');
    }
    MuspelsSynir(){
      this.enemiesService.ItemSelected('Muspels Synir');
    }
}
