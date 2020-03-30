import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataPeserta } from '../dataPeserta';
@Component({
  selector: 'jiwa-data',
  templateUrl: './jiwaData.component.html',
  styleUrls: ['./jiwaData.component.css']
})
export class AsuransiJiwaDataComponent implements OnInit {
    dataPeserta = dataPeserta;
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