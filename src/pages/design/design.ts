import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-design',
  templateUrl: 'design.html'
})
export class DesignPage {

  constructor(public navCtrl: NavController) {

  }
  
  detailPage(){
       this.navCtrl.push(AddPage);
  }
}
