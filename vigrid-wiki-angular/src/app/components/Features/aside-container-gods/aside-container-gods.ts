import { Component, Input } from '@angular/core';
import { GodService } from '../../../Services/god-service';

@Component({
  selector: 'app-aside-container-gods',
  imports: [],
  templateUrl: './aside-container-gods.html',
  styleUrl: './aside-container-gods.css',
})
export class AsideContainerGods {
  @Input() isGodsVisible_ = false;
  constructor(private godService: GodService) { }
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  Odin() {
    this.godService.ItemSelected('Odin');
  }
  Freyr() {
    this.godService.ItemSelected('Freyr');
  }
  Thor() {
    this.godService.ItemSelected('Thor');
  }
  Tyr() {
    this.godService.ItemSelected('Tyr');
  }
  Heimdall() {
    this.godService.ItemSelected('Heimdall');
  }
}