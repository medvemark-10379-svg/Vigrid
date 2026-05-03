import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RuneService {
  private readonly API_URL = `${environment.apiUrl}/runes`;

  private runesCache: any[] = [];

  private chosenRunes = new BehaviorSubject<any>(null);
  currentItem = this.chosenRunes.asObservable();

  constructor(private http: HttpClient) {}
  getRunes(): Observable<any[]> {
    if (this.runesCache.length > 0) {
      return of(this.runesCache); 
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(runes => this.runesCache = runes) 
    );
  }
  ItemSelected(name: string) {
    this.getRunes().subscribe((runes: any[]) => {
      const rune = runes.find(item => item.name === name);
      this.chosenRunes.next(rune || null);
    });
  }
  ItemSelectedAll() {
    this.getRunes().subscribe((runes: any[]) => {
      this.chosenRunes.next(runes);
    });
  }
}
