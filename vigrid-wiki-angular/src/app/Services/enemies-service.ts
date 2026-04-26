import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnemiesService {
  private readonly API_URL = `${environment.apiUrl}/enemies`;

  private enemiesCache: any[] = [];

  private chosenEnemy = new BehaviorSubject<any>(null);
  currentItem = this.chosenEnemy.asObservable();

  constructor(private http: HttpClient) {}

  getEnemies(): Observable<any[]> {
    if (this.enemiesCache.length > 0) {
      return of(this.enemiesCache);
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(enemies => this.enemiesCache = enemies)
    );
  }
  ItemSelected(name: string) {
    this.getEnemies().subscribe((enemies: any[]) => {
      const enemy = enemies.find(item => item.name === name);
      this.chosenEnemy.next(enemy || null);
    });
  }
}
