import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit, OnChanges {

  private crumbList: Array<any> = [];

  @Input()
  private locationUrl: string;

  constructor() { }

  ngOnInit() {
    this.crumbList = this.getCrumbs();
  }

  ngOnChanges(changes) {
    if (changes.locationUrl) {
      this.crumbList = this.getCrumbs();
    }
  }

  /**
   * get list of crumbs for display
   */
  getCrumbs(): any {
    const crumbsList: Array<any> = [];
    let fragAcc = '';

    for (const urlFragment of this.locationUrl.split('/')) {
      if (urlFragment !== '') {
        crumbsList.push({
          label: urlFragment,
          link: fragAcc + '/' + urlFragment,
        });
        fragAcc += '/' + urlFragment;
      }
    }

    return crumbsList;
  }

}
