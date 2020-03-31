import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-promo',
  templateUrl: './detailPromo.component.html',
  styleUrls: ['./detailPromo.component.css']
})
export class DetailPromoComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
      ) { }
    ngOnInit() {}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/