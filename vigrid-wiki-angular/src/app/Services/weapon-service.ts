import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  private readonly API_URL = `${environment.apiUrl}/weapons`;
  private weaponsCache: any[] = [];

  private chosenWeapon = new BehaviorSubject<any>(null);
  currentItem = this.chosenWeapon.asObservable();

  constructor(private http: HttpClient) {}

  getWeapons(): Observable<any[]> {
    if (this.weaponsCache.length > 0) {
      return of(this.weaponsCache); 
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(weapons => this.weaponsCache = weapons)
    );
  }

  ItemSelected(name: string) {
    this.getWeapons().subscribe(weapons => {
      const weapon = weapons.find(item => item.name === name);
      this.chosenWeapon.next(weapon || null);
    });
  }
}
