import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'asuransi-perjalanan',
  templateUrl: './asuransiPerjalanan.component.html',
  styleUrls: ['./asuransiPerjalanan.component.css']
})
export class AsuransiPerjalananComponent implements OnInit {
    produk = "Asuransi Perjalanan";
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