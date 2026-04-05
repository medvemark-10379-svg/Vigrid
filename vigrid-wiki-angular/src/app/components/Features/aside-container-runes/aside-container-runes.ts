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
  UlfberhtSword() {
    this.runeService.ItemSelected('Ulfberht Sword');
  }
  DaneAxe() {
    this.runeService.ItemSelected('Dane Axe');
  }
  Seax() {
    this.runeService.ItemSelected('Seax');
  }
  Shield() {
    this.runeService.ItemSelected('Shield');
  }
}
