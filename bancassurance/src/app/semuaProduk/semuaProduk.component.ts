import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'semua-produk',
  templateUrl: './semuaProduk.component.html',
  styleUrls: ['./semuaProduk.component.css']
})
export class SemuaProdukComponent implements OnInit {

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