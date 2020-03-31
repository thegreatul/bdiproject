import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataPeserta } from '../dataPeserta';
import { data_peserta } from '../data_peserta';

import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'jiwa-data',
  templateUrl: './jiwaData.component.html',
  styleUrls: ['./jiwaData.component.css']
})
export class AsuransiJiwaDataComponent implements OnInit {
    // dataPeserta = dataPeserta;
    data_peserta = [];
    stringifiedData: any;  
    parsedJson: any;
    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private httpClient : HttpClient

      ) { }
    ngOnInit() {
        const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json'}) };
        this.httpClient.get('http://localhost:8886/data_peserta', _options).subscribe((data)=>{
        this.stringifiedData = JSON.stringify(data);
        this.parsedJson = JSON.parse(this.stringifiedData);
        this.data_peserta = [this.parsedJson];
      });
    }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/