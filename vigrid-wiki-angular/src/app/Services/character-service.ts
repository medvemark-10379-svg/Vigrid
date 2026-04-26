import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = `${environment.apiUrl}/characters`;
  
  private charactersCache: any[] = [];

  private chosenCharacter = new BehaviorSubject<any>(null);
  currentItem = this.chosenCharacter.asObservable();

  private randomcharacter = new BehaviorSubject<any>(null);
  randomItem = this.randomcharacter.asObservable();

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    if (this.charactersCache.length > 0) {
      return of(this.charactersCache);
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(chars => this.charactersCache = chars)
    );
  }

  ItemSelected(name: string) {
    this.getCharacters().subscribe((characters: any[]) => {
      const character = characters.find(item => item.name === name);
      this.chosenCharacter.next(character || null);
    });
  }

  setRandomCharacter() {
    this.getCharacters().subscribe((characters: any[]) => {
      if (characters.length > 0) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        this.randomcharacter.next(characters[randomIndex]);
      }
    });
  }

  getCharacterByName(name: string): Observable<any[]> {
    return this.getCharacters().pipe(
      map((characters: any[]) => 
        characters.filter(character => name.includes(character.name))
      )
    );
  }

  clearRandomCharacter() {
    this.randomcharacter.next(null);
    this.chosenCharacter.next(null);
  }
}
