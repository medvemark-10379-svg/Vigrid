import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  private readonly API_URL = `${environment.apiUrl}/requirements`;

  private requirementsCache: any[] = [];

  private requirementClickedSource = new Subject<boolean>();
  requirementClicked$ = this.requirementClickedSource.asObservable();

  constructor(private http: HttpClient) {}

  showRequirements() {
    this.requirementClickedSource.next(true);
  }
  getRequirementList(): Observable<any[]> {
    if (this.requirementsCache.length > 0) {
      return of(this.requirementsCache);
    }
    return this.http.get<any[]>(this.API_URL).pipe(
      tap(reqs => this.requirementsCache = reqs)
    );
  }
}
