import { Component, Input } from '@angular/core';
import { EnemiesService } from '../../../Services/enemies-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-container-enemies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-container-enemies.html',
  styleUrls: ['./aside-container-enemies.css'],
})
export class AsideContainerEnemies {
  @Input() isEnemiesVisible_ = false;
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(public enemiesService: EnemiesService) { }
  public window = window;
  enemy$: Observable<any[]> | undefined;
  ngOnInit() {
    this.enemy$ = this.enemiesService.getEnemies();
  }
  selectEnemy(name: string) {
    this.enemiesService.ItemSelected(name);
  }
}
