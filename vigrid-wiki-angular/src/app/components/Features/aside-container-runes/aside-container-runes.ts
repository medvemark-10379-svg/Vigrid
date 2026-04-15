import { Component, Input } from '@angular/core';
import { RuneService } from '../../../Services/rune-service';
@Component({
  selector: 'app-aside-container-runes',
  standalone: true,
  imports: [],
  templateUrl: './aside-container-runes.html',
  styleUrls: ['./aside-container-runes.css'],
})
export class AsideContainerRunes {
  @Input() isVisibleRunes_ = false;
  constructor(private runeService: RuneService) { }
  Top() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  Raido() {
    this.runeService.ItemSelected('Raido');
  }
  Tiwaz() {
    this.runeService.ItemSelected('Tiwaz');
  }
  Thurisaz() {
    this.runeService.ItemSelected('Thurisaz');
  }
  Uruz() {
    this.runeService.ItemSelected('Uruz');
  }
  Algiz() {
    this.runeService.ItemSelected('Algiz');
  }
}
