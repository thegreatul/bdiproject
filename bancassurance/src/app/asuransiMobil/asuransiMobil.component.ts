import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'asuransi-mobil',
  templateUrl: './asuransiMobil.component.html',
  styleUrls: ['./asuransiMobil.component.css']
})
export class AsuransiMobilComponent implements OnInit {
    produk = "Asuransi Mobil";
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