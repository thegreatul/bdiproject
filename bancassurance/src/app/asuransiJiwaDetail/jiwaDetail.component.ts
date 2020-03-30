import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jiwaDetail } from '../jiwaDetail';
@Component({
  selector: 'jiwa-detail',
  templateUrl: './jiwaDetail.component.html',
  styleUrls: ['./jiwaDetail.component.css']
})
export class AsuransiJiwaDetailComponent implements OnInit {
    jiwaDetail = jiwaDetail;
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