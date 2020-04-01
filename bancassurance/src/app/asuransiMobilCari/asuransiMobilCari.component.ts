import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { jiwa } from '../jiwa';
@Component({
  selector: 'cari-mobil',
  templateUrl: './asuransiMobilCari.component.html',
  styleUrls: ['./asuransiMobilCari.component.css']
})
export class AsuransiMobilCariComponent implements OnInit {    
    mobil = [];
    stringifiedData: any;  
    parsedJson: any;
    constructor(
        private route: ActivatedRoute,
        private httpClient : HttpClient
      ) { }
    ngOnInit() {
      const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json'}) };
       this.httpClient.get('http://localhost:8887/cari', _options).subscribe((data)=>{
        this.stringifiedData = JSON.stringify(data);
        console.log("Data JSON BE :",data);
        this.parsedJson = JSON.parse(this.stringifiedData);
        this.mobil = [this.parsedJson];
      });
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/