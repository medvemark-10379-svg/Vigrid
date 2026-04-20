import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import emailjs from '@emailjs/browser';
const EMAILJS_CONFIG = {
  serviceId: 'service_9737aqu',
  templateId: 'template_177lo7q',
  publicKey: 'QFu5L4hHb7ZH2MkDh'
};
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  showFeedback = signal(false);
  feedbackClicked = new BehaviorSubject<boolean>(false);
  
  async sendfeedback(formData: any) {
    return emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formData, 
      EMAILJS_CONFIG.publicKey
    )
  }
  toggleFeedback() {
    this.showFeedback.update(current => !current);
    this.feedbackClicked.next(true);
  }
}
