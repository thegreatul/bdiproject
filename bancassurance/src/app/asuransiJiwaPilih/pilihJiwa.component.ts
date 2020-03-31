import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { jiwa } from '../jiwa';
@Component({
  selector: 'pilih-jiwa',
  templateUrl: './pilihJiwa.component.html',
  styleUrls: ['./pilihJiwa.component.css']
})
export class AsuransiJiwaPilihComponent implements OnInit {
    // jiwa = jiwa;
    
    jiwa = [];
    stringifiedData: any;  
    parsedJson: any;
    constructor(
        private route: ActivatedRoute,
        private httpClient : HttpClient
      ) { }
    ngOnInit() {
      const _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','accept':'application/json'}) };
       this.httpClient.get('http://localhost:8886/cari', _options).subscribe((data)=>{
        this.stringifiedData = JSON.stringify(data);
        console.log("Data JSON BE :",data);
        this.parsedJson = JSON.parse(this.stringifiedData);
        this.jiwa = [this.parsedJson];
      });
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/