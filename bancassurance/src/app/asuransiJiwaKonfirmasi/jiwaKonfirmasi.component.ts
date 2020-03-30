import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataKonfirmasi } from '../dataKonfirmasi';
@Component({
  selector: 'jiwa-konfirmasi',
  templateUrl: './jiwaKonfirmasi.component.html',
  styleUrls: ['./jiwaKonfirmasi.component.css']
})
export class AsuransiJiwaKonfirmasiComponent implements OnInit {
  dataKonfirmasi = dataKonfirmasi;
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