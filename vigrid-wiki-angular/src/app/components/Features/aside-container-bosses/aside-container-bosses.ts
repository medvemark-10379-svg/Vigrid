import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BossService } from '../../../Services/boss-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside-container-bosses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-container-bosses.html',
  styleUrls: ['./aside-container-bosses.css'],
})
export class AsideContainerBosses implements OnInit {
  @Input() isVisibleBosses_ = false;
  bosses$: Observable<any[]> | undefined;

  constructor(public bossService: BossService) { }

  ngOnInit() {
    this.bosses$ = this.bossService.getBosses();
  }
  Top() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  selectBoss(name: string) {
    this.bossService.ItemSelected(name);
  }
}