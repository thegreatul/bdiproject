import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataAsuransi } from '../dataAsuransi';
@Component({
  selector: 'jiwa-pembayaran',
  templateUrl: './jiwaPembayaran.component.html',
  styleUrls: ['./jiwaPembayaran.component.css']
})
export class AsuransiJiwaPembayaranComponent implements OnInit {
  dataAsuransi = dataAsuransi;
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