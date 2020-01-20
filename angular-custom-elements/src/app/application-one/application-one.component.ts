import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../services/platform.service';
import { AnyService } from '../services/any.service';

@Component({
  selector: 'app-application-one',
  templateUrl: './application-one.component.html',
  styleUrls: ['./application-one.component.scss']
})
export class ApplicationOneComponent implements OnInit {
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
