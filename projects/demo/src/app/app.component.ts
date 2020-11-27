import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatxSidenavMenuController } from 'angular-material-extended';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routesData: {[url: string]: {name: string, html: string, ts: string}} = {
    '/basic': {
      name: 'Basic',
      html: require('!raw-loader!./pages/basic/basic.component.html').default,
      ts: require('!raw-loader!./pages/basic/basic.component.ts').default
    },
  };

  currentUrl: string;

  constructor(router: Router,
              public sidenavMenuCtrl: MatxSidenavMenuController) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = router.url;
      }
    });
  }

}
