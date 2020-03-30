import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jiwa } from '../jiwa';
@Component({
  selector: 'pilih-jiwa',
  templateUrl: './pilihJiwa.component.html',
  styleUrls: ['./pilihJiwa.component.css']
})
export class AsuransiJiwaPilihComponent implements OnInit {
    jiwa = jiwa;
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