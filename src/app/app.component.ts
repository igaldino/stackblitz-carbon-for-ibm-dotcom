import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Software Access Catalog downloads';
  l1Data = {
    title: 'IBM Partner Plus',
    url: '/',
    menuItems: [
      { title: 'Search for software' },
      { title: 'Popular Downloads' },
      { title: 'Obsolete Software' },
      { title: 'Download History' },
      { title: 'Request Assistance' },
      { title: 'Sign out' }
    ]
  };
  results = {
    showTillImageCountLimit: true,
    unlimitedImagesCount: 10,
    imageDisplayLimit: 5,
    imagesCount: 5,
    brands: [
      { name: 'AI', imagesCount: 1 },
      { name: 'Cloud', imagesCount: 1 },
      { name: 'DB2', imagesCount: 1 },
      { name: 'Watson', imagesCount: 1 },
      { name: 'Websphere', imagesCount: 1 }
    ]
  };

  readonly searchTypes = ['All', 'Exact'];
  readonly availablePostDates = [
    { code: '0', description: 'All Post' },
    { code: '1', description: 'Within past 1 month' },
    { code: '3', description: 'Within past 3 months' },
    { code: '6', description: 'Within past 6 months' },
    { code: '12', description: 'Within past 1 year' }
  ];
  readonly availableLanguages = [
    { code: 'us', description: 'English' },
    { code: 'pt', description: 'Portuguese' }
  ];
  readonly availablePlatforms = [
    { code: 'linux', description: 'Linux' },
    { code: 'unix', description: 'Unix' },
    { code: 'windows', description: 'Windows' }
  ];
  readonly downloadMethods = [
    { code: 'DD', description: 'Download Director' },
    { code: 'HTTP', description: 'HTTP' }
  ];
  readonly fakeTable = [
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' },
    { name: 'Load Balancer', protocol: 'HTTP', port: '80', rule: 'Round Robin', group: 'Maureen\'s VM Groups', status: 'Active' }
  ];

  trackByBrandName(index: number, brand: any): string {
    return brand.name;
  }

  handleExpandRowAll(event: any): any {
    console.log(event);
    const { currentTarget, detail } = event;
    console.log(currentTarget);
    console.log(detail);
    const rows = currentTarget.querySelectorAll('bx-table-expand-row');
    console.log(rows);
    Array.prototype.forEach.call(rows, (row) => {
      row.expanded = detail.expanded;
    });
  }

  handleExpandRow(event: any): any {
    console.log(event);
    const { currentTarget } = event;
    console.log(currentTarget);
    const headerRow = currentTarget.querySelector('bx-table-header-expand-row');
    console.log(headerRow);
    const rows = currentTarget.querySelectorAll('bx-table-expand-row');
    console.log(rows);
    headerRow.expanded = Array.prototype.every.call(
      rows,
      (row) => {
        console.log(row);
        return row.expanded;
      }
    );
  }

  handleChangeSelectionAll(event: any): any {
    console.log(event);
    const { currentTarget, detail } = event;
    console.log(currentTarget);
    console.log(detail);
    const rows = currentTarget.querySelectorAll('bx-table-row');
    console.log(rows);
    Array.prototype.forEach.call(rows, (row) => {
      row.selected = detail.selected;
    });
  }

  handleChangeSelection(event: any): any {
    console.log(event);
    const { currentTarget } = event;
    console.log(currentTarget);
    const headerRow = currentTarget.querySelector('bx-table-header-row');
    console.log(headerRow);
    const rows = currentTarget.querySelectorAll('bx-table-row');
    console.log(rows);
    headerRow.selected = Array.prototype.every.call(
      rows,
      (row) => {
        console.log(row);
        return row.selected;
      }
    );
  }
}
