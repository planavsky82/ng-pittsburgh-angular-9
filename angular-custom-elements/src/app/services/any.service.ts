import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class AnyService {
  public appNumber: number;

  constructor() { }

  setServiceMessage(appNumber: number): void {
    this.appNumber = appNumber;
  }

  getServiceMessage(): string {
    return 'This is a message from Application ' + this.appNumber + '!';
  }
}
