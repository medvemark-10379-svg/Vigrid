import { Component, inject } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  BossService,
  EnemiesService,
  CharacterService,
  WeaponService,
  GodService,
  RuneService,
  CardService,
  Changelog,
  FeedbackService
} from '../../../Services/_serviceExport';
@Component({
  selector: 'app-home',
  imports: [HomePage, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public feedbackService = inject(FeedbackService);
  feed = this.feedbackService.showFeedback;
  data: any = null;
  dataCard: any = null;
  datarune: any = null
  characterCards: any[] = [];
  availableCharacters: any[] = [];
  updates: any = null;
  isSending: boolean = false;
  constructor(
    private bossService: BossService,
    private enemiesService: EnemiesService,
    public characterService: CharacterService,
    private weaponService: WeaponService,
    private godService: GodService,
    public runeService: RuneService,
    public cardService: CardService,
    private changelog: Changelog,
  ) { }
  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
  ngOnInit() {
    this.changelog.currentItem.subscribe(res => {
      if (res) { this.updates = res; this.data = null; this.dataCard = null; this.characterCards = [];
         this.availableCharacters = []; this.feedbackService.showFeedback.set(false), this.datarune = null };
    })
    this.bossService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = [];
         this.updates = null; this.feedbackService.showFeedback.set(false), this.datarune = null };
    });
    this.enemiesService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = [];
         this.updates = null; this.feedbackService.showFeedback.set(false), this.datarune = null };
    });
    this.characterService.currentItem.subscribe(res => {
      if (res) {
        this.data = res; this.dataCard = null; this.availableCharacters = [];
        this.characterCards = this.cardService.getCardsByCharacter(res.name);
        this.updates = null; this.feedbackService.showFeedback.set(false),
          this.datarune = null
      };
    });
    this.weaponService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = [];
         this.updates = null; this.feedbackService.showFeedback.set(false), this.datarune = null };
    });
    this.godService.currentItem.subscribe(res => {
      if (res) { this.data = res; this.dataCard = null; this.characterCards = []; this.availableCharacters = [];
         this.updates = null; this.feedbackService.showFeedback.set(false), this.datarune = null };
    });
    this.runeService.currentItem.subscribe(res => {
      if (res) {
        this.datarune = res; this.data = null; this.dataCard = null; this.updates = null;
        this.characterCards = []; this.availableCharacters = [];
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
    this.feedbackService.feedbackClicked.subscribe(res => {
      if (res) {
        this.data = null; this.dataCard = null; this.datarune = null;
        this.characterCards = []; this.availableCharacters = []; this.updates = null;
      }
    })
  }
  refreshPage() {
    window.location.reload();
  }
  feedbackForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required, Validators.minLength(20)])
  })
  get comment() {
    return this.feedbackForm.get('comment');
  }
  categories = [
    'General Feedback',
    'Bug Report',
    'Gameplay Report',
    'Balance Issue',
    'Suggestion',
  ]
  async onSubmit() {
    if (this.feedbackForm.valid && !this.isSending) {
      this.isSending = true;
      try {
        await this.feedbackService.sendfeedback(this.feedbackForm.value);

        console.log('Feedback sent successfully:', this.feedbackForm.value);
        this.feedbackForm.reset();
        this.feedbackService.showFeedback.set(false);

        alert('Feedback sent successfully!');
      } catch (error) {
        console.error('Error sending feedback:', error);
        alert('Error sending feedback. Please try again.');
      } finally {
        this.isSending = false;
      }
    }
  }
}