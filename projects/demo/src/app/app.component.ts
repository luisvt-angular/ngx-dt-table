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
    '/basic-remote': {
      name: 'Basic Remote',
      html: require('!raw-loader!./pages/basic-remote/basic-remote.component.html').default,
      ts: require('!raw-loader!./pages/basic-remote/basic-remote.component.ts').default
    },
    '/selectable': {
      name: 'Selectable',
      html: require('!raw-loader!./pages/selectable/selectable.component.html').default,
      ts: require('!raw-loader!./pages/selectable/selectable.component.ts').default
    },
    '/scrollable': {
      name: 'Scrollable',
      html: require('!raw-loader!./pages/scrollable/scrollable.component.html').default,
      ts: require('!raw-loader!./pages/scrollable/scrollable.component.ts').default
    },
    '/frozen-columns': {
      name: 'Frozen Columns',
      html: require('!raw-loader!./pages/frozen-columns/frozen-columns.component.html').default,
      ts: require('!raw-loader!./pages/frozen-columns/frozen-columns.component.ts').default
    },
    '/sortable': {
      name: 'Sortable',
      html: require('!raw-loader!./pages/sortable/sortable.component.html').default,
      ts: require('!raw-loader!./pages/sortable/sortable.component.ts').default
    },
    '/sortable-remote': {
      name: 'Sortable Remote',
      html: require('!raw-loader!./pages/sortable-remote/sortable-remote.component.html').default,
      ts: require('!raw-loader!./pages/sortable-remote/sortable-remote.component.ts').default
    },
    '/cell-template': {
      name: 'Cell/Header Template',
      html: require('!raw-loader!./pages/cell-template/cell-template.component.html').default,
      ts: require('!raw-loader!./pages/cell-template/cell-template.component.ts').default
    },
    '/editor-template': {
      name: 'Editor Template',
      html: require('!raw-loader!./pages/editor-template/editor-template.component.html').default,
      ts: require('!raw-loader!./pages/editor-template/editor-template.component.ts').default
    },
    '/row-detail-template': {
      name: 'Row Detail Template',
      html: require('!raw-loader!./pages/row-detail-template/row-detail-template.component.html').default,
      ts: require('!raw-loader!./pages/row-detail-template/row-detail-template.component.ts').default
    },
    '/group-by': {
      name: 'Group By',
      html: require('!raw-loader!./pages/group-by/group-by.component.html').default,
      ts: require('!raw-loader!./pages/group-by/group-by.component.ts').default
    },
    '/print': {
      name: 'Print',
      html: require('!raw-loader!./pages/print/print.component.html').default,
      ts: require('!raw-loader!./pages/print/print.component.ts').default
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
