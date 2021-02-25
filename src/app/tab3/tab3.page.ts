import { Component } from '@angular/core';
import { Employee } from '../employee.service'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  info: any = null;

  constructor(public emp: Employee, public load: LoadingController) {
    this. presentLoadingWithOptions();
    this.emp.getInfo().subscribe((data)=>{
    this.info = data;
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.load.create({
      spinner: "bubbles",
      duration: 1000,
      message: 'Please wait',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }  

}
