import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataAsuransi } from '../dataAsuransi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'jiwa-pembayaran',
  templateUrl: './jiwaPembayaran.component.html',
  styleUrls: ['./jiwaPembayaran.component.css']
})
export class AsuransiJiwaPembayaranComponent implements OnInit {
  dataAsuransi = dataAsuransi;
  detail_asuransi = [];
  stringifiedData: any;  
  parsedJson: any;
    constructor(
        private route: ActivatedRoute,
        private httpClient : HttpClient
      ) { }
    ngOnInit() {
      const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json'}) };
      this.httpClient.get('http://localhost:8886/detail_asuransi', _options).subscribe((data)=>{
      this.stringifiedData = JSON.stringify(data);
      this.parsedJson = JSON.parse(this.stringifiedData);
      this.detail_asuransi = [this.parsedJson];
    });
    }
    
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/