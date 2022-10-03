import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
data: any;

  constructor(public getdata: Employee,  public router: Router) { 
    
  }

  ngOnInit() {
    this.getdata.doGet().subscribe(res => {
      this.data = res.data.articles;
      console.log(res)
    })

  }

  goHome(){
    this.router.navigateByUrl('tabs/tab1');
  }
  

}
