import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'asuransi-jiwa',
  templateUrl: './asuransiJiwa.component.html',
  styleUrls: ['./asuransiJiwa.component.css']
})
export class AsuransiJiwaComponent implements OnInit {
    produk = "Asuransi Jiwa";
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