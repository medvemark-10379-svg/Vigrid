import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GodService {
  private readonly API_URL = `${environment.apiUrl}/gods`;

  private godsCache: any[] = [];

  private chosenGod = new BehaviorSubject<any>(null);
  currentItem = this.chosenGod.asObservable();

  constructor(private http: HttpClient) {}
  getGods(): Observable<any[]> {
    if (this.godsCache.length > 0) {
      return of(this.godsCache); 
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(gods => this.godsCache = gods)
    );
  }

  ItemSelected(name: string) {
    this.getGods().subscribe((gods: any[]) => {
      const god = gods.find(item => item.name === name);
      this.chosenGod.next(god || null);
    });
  }
}
