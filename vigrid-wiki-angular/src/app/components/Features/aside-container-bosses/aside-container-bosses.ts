import { Component, Input, } from '@angular/core';
import { BossService } from '../../../Services/boss-service';

@Component({
  selector: 'app-aside-container-bosses',
  standalone: true,
  imports: [],
  templateUrl: './aside-container-bosses.html',
  styleUrls: ['./aside-container-bosses.css'],
})
export class AsideContainerBosses {
  @Input() isVisibleBosses_ = false;
  public window = window;
  constructor(private bossService: BossService) { }
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  Hel() {
    this.bossService.ItemSelected('Hel');
  }
  Fenrir() {
    this.bossService.ItemSelected('Fenrir');
  }
  Jormungandr() {
    this.bossService.ItemSelected('Jörmungandr');
  }
  Loki() {
    this.bossService.ItemSelected('Loki');
  }
  Surtr() {
    this.bossService.ItemSelected('Surtr');
  }

}