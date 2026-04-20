import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import {
  BossService,
  EnemiesService,
  CharacterService,
  WeaponService,
  GodService,
  RuneService,
  CardService,
  Changelog
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
  datarune: any = null
  characterCards: any[] = [];
  availableCharacters: any[] = [];
  updates: any = null;
  constructor(
    private bossService: BossService,
    private enemiesService: EnemiesService,
    public characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    public runeService: RuneService,
    public cardService: CardService,
    private changelog: Changelog
  ) { }
  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
  ngOnInit() {
    this.changelog.currentItem.subscribe(res => {
      if (res) { this.updates = res; this.data = null; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; };
    })
    this.bossService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; this.updates = null; };
    });
    this.enemiesService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; this.updates = null; };
    });
    this.characterService.currentItem.subscribe(res => {
      if (res) {
        this.data = res; this.dataCard = null; this.availableCharacters = [];
        this.characterCards = this.cardService.getCardsByCharacter(res.name);
        this.updates = null
      };
    });
    this.weaponService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; this.updates = null; };
    });
    this.godService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = []; this.updates = null; };
    });
    this.runeService.currentItem.subscribe(res => {
      if (res) {
        this.datarune = res;
        this.data = null;
        this.dataCard = null;
        this.updates = null;
        this.characterCards = [];
        this.availableCharacters = [];
      };
    });
    this.cardService.currentItem.subscribe(res => {
      if (res) {
        this.dataCard = res; this.data = null; this.characterCards = []; this.updates = null;
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
