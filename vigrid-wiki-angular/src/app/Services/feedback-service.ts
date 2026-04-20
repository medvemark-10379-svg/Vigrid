import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  showFeedback = signal(false);
  feedbackClicked = new BehaviorSubject<boolean>(false);

  toggleFeedback() {
    this.showFeedback.set(true);
    this.feedbackClicked.next(true);
  }
}
