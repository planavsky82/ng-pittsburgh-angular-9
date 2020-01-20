import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../services/platform.service';
import { AnyService } from '../services/any.service';

@Component({
  selector: 'app-application-two',
  templateUrl: './application-two.component.html',
  styleUrls: ['./application-two.component.scss']
})
export class ApplicationTwoComponent implements OnInit {
  public platformOutput: string = 'None';
  public anyOutput: string = 'None';

  constructor(private platformService: PlatformService, private anyService: AnyService) {}

  ngOnInit() {}

  send(appNumber: number) {
    this.platformService.setServiceMessage(appNumber);
    this.anyService.setServiceMessage(appNumber);
    alert('Sent!');
  }

  receive() {
    if (this.platformService.appNumber) {
      this.platformOutput = this.platformService.getServiceMessage();
    }
    if (this.anyService.appNumber) {
      this.anyOutput = this.anyService.getServiceMessage();
    }
  }
}
