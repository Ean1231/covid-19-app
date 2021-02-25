import { Component } from "@angular/core";
import { Employee } from "../employee.service";
import { LoadingController } from "@ionic/angular";
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  providers : [CallNumber]
})
export class Tab1Page {
  constructor(public emp: Employee, public load: LoadingController, public callNumber: CallNumber, public sms: SMS ) {}

  call(){
    this.callNumber.callNumber("0800029999", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  message(){
    this.sms.send('0600123456', 'i Need assistance!');
  }
}
