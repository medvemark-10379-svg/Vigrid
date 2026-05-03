import { Injectable, } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Changelog {
  private updatesList = [
    {
      version: '1.0.0',
      date: '2026-04-07',
      title: 'Release of Vigrid: Survive the Ragnarok',
      changes: ['Version 1.0.0 is out now'],
      ishidden: false
    },
  ]
  private itemSource = new BehaviorSubject<any>(null);
  currentItem = this.itemSource.asObservable();
  showChangelog() {
    this.itemSource.next(this.updatesList);
  }
}
