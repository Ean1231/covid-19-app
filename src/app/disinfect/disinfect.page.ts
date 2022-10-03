import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-disinfect',
  templateUrl: './disinfect.page.html',
  styleUrls: ['./disinfect.page.scss'],
})
export class DisinfectPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigateByUrl('tabs/tab1');
  }

}
