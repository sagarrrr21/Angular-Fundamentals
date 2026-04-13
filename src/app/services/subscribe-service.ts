import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  onSubscribeClicked(monthly: string) {
    alert('thank you for you subscription ' + monthly + ' ' + 'you can access the service now');
  }
}
