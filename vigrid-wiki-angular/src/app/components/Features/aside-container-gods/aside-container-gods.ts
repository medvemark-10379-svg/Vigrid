import { Component, Input } from '@angular/core';
import { GodService } from '../../../Services/god-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-container-gods',
  imports: [CommonModule],
  templateUrl: './aside-container-gods.html',
  styleUrl: './aside-container-gods.css',
})
export class AsideContainerGods {
  @Input() isGodsVisible_ = false;
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private godService: GodService) { }
  public window = window;
  god$: Observable<any[]> | undefined;
  ngOnInit() {
    this.god$ = this.godService.getGods();
  }
  selectGod(name: string) {
    this.godService.ItemSelected(name);
  }
}