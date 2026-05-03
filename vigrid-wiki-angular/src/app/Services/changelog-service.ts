import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Changelog {
  private readonly API_URL = `${environment.apiUrl}/updates`;
  
  private updatesCache: any[] = [];

  private itemSource = new BehaviorSubject<any>(null);
  currentItem = this.itemSource.asObservable();

  constructor(private http: HttpClient) {}

  getUpdates(): Observable<any[]> {
    if (this.updatesCache.length > 0) {
      return of(this.updatesCache);
    }

    return this.http.get<any[]>(this.API_URL).pipe(
      map((updates: any[]) => updates.map(update => ({
        ...update,
        changes: typeof update.changes === 'string' ? update.changes.split(',') : update.changes,
        ishidden: update.ishidden === 1
      }))),
      tap(formattedUpdates => this.updatesCache = formattedUpdates)
    );
  }

  showChangelog() {
    this.getUpdates().subscribe((updates: any[]) => {
      this.itemSource.next(updates);
    });
  }
}
