import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'asuransi-saya',
  templateUrl: './asuransiSaya.component.html',
  styleUrls: ['./asuransiSaya.component.css']
})
export class AsuransiSayaComponent implements OnInit {

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