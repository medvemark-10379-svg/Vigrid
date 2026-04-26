import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  private readonly API_URL = environment.apiUrl;

  private bossesCache: any[] = [];

  private chosenBoss = new BehaviorSubject<any>(null);
  currentItem = this.chosenBoss.asObservable();

  constructor(private http: HttpClient) { }

  getBosses(): Observable<any[]> {
    if (this.bossesCache.length > 0) {
      return of(this.bossesCache);
    }
    return this.http.get<any[]>(`${this.API_URL}/bosses`).pipe(
      tap(bosses => this.bossesCache = bosses)
    );
  }

  ItemSelected(name: string) {
    this.getBosses().subscribe(bosses => {
      const boss = bosses.find(item => item.name === name);
      if (boss) {
        this.chosenBoss.next(boss);
      }
    });
  }
}
