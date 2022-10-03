import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-hands',
  templateUrl: './wash-hands.page.html',
  styleUrls: ['./wash-hands.page.scss'],
})
export class WashHandsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigateByUrl('tabs/tab1');
  }

}
