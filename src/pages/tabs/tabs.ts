import { Component } from '@angular/core';

import { DesignPage } from '../design/design';
import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DesignPage;
  tab4Root = OrderPage;

  constructor() {

  }
}
