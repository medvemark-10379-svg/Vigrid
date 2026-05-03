import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly API_URL = `${environment.apiUrl}/cards`;
  
  private cardsCache: any[] = [];

  private chosenCard = new BehaviorSubject<any>(null);
  currentItem = this.chosenCard.asObservable();

  constructor(private http: HttpClient) {}

  getCards(): Observable<any[]> {
    if (this.cardsCache.length > 0) {
      return of(this.cardsCache);
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(cards => this.cardsCache = cards)
    );
  }

  ItemSelected(name: string) {
    this.getCards().subscribe((cards: any[]) => {
      const card = cards.find(item => item.name === name);
      this.chosenCard.next(card);
    });
  }

  ItemSelectedAll() {
    this.getCards().subscribe((cards: any[]) => {
      this.chosenCard.next(cards);
    });
  }

  getCardsByCharacter(character: string): Observable<any[]> {
    return this.getCards().pipe(
      map((cards: any[]) => 
        cards.filter(card => {
          const available = typeof card.availableFor === 'string' 
            ? card.availableFor.split(',') 
            : card.availableFor;
          
          return available && available.includes(character);
        })
      )
    );
  }
}
