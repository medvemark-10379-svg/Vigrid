import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import {
  BossService,
  EnemiesService,
  CharacterService,
  WeaponService,
  GodService,
  RuneService,
  CardService
} from '../../../Services/_serviceExport';

@Component({
  selector: 'app-home',
  imports: [HomePage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data: any = null;
  dataCard: any = null;
  characterCards: any[] = [];
  availableCharacters: any[] = [];
  constructor(
    private bossService: BossService,
    private enemiesService: EnemiesService,
    public characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    private runeService: RuneService,
    public cardService: CardService
  ) { }
  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
  ngOnInit() {
    this.bossService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    });
    this.enemiesService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    });
    this.characterService.currentItem.subscribe(res => {
      if (res) {
        this.data = res; this.dataCard = null; this.availableCharacters = [];
        this.characterCards = this.cardService.getCardsByCharacter(res.name);
      };
    });
    this.weaponService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    });
    this.godService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    });
    this.runeService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    })
    this.cardService.currentItem.subscribe(res => {
      if (res) {
        this.dataCard = res; this.data = null; this.characterCards = [];
        if (!Array.isArray(res) && res.availableFor) {
          this.availableCharacters = this.characterService.getCharacters().filter(char =>
            res.availableFor.includes(char.name)
          );
        } else {
          this.availableCharacters = [];
        }
      };
    })
  }
}
