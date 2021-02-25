import { Component } from "@angular/core";
import { Employee } from "../employee.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public searchTerm: string = "";
  public items: any;

  stats = [];

  constructor(public emp: Employee, public load: LoadingController) {
    this.presentLoadingWithOptions();
    this.emp.getData().subscribe((data: any) => {
      this.stats = data;
      console.log(data);
    });
  }

  //Statusbar

  async presentLoadingWithOptions() {
    const loading = await this.load.create({
      spinner: "circles",
      duration: 1000,
      message: "Please wait",
      translucent: true,
      cssClass: "custom-class custom-loading",
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed with role:", role);
  }

  //Search bar

  filterData(ev: any) {
    this.stats = this.stats
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.stats = this.stats.filter((item) => {
        console.log(item);
        return item.country.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}
