import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataReferensi } from '../dataReferensi';
@Component({
  selector: 'jiwa-informasi',
  templateUrl: './jiwaInformasi.component.html',
  styleUrls: ['./jiwaInformasi.component.css']
})
export class AsuransiJiwaInformasiComponent implements OnInit {
    dataReferensi = dataReferensi;
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