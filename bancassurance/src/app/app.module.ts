import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SemuaProdukComponent } from './semuaProduk/semuaProduk.component';
import { AsuransiSayaComponent } from './asuransiSaya/asuransiSaya.component';
import { AsuransiJiwaComponent } from './asuransiJiwa/AsuransiJiwa.component';
import { AsuransiKesehatanComponent } from './asuransiKesehatan/asuransiKesehatan.component';
import { AsuransiJiwaPilihComponent } from './asuransiJiwaPilih/pilihJiwa.component';
import { AsuransiJiwaDetailComponent } from './asuransiJiwaDetail/jiwaDetail.component';
import { AsuransiJiwaDataComponent } from './asuransiJiwaData/jiwaData.component';
import { AsuransiJiwaPembayaranComponent } from './asuransiJiwaPembayaran/jiwaPembayaran.component';
import { AsuransiJiwaKonfirmasiComponent } from './asuransiJiwaKonfirmasi/jiwaKonfirmasi.component';
import { AsuransiJiwaInformasiComponent } from './asuransiJiwaInformasi/jiwaInformasi.component';
import { AsuransiJiwaDetailStatusComponent } from './asuransiJiwaDetailStatus/jiwaDetailStatus.component';
import { AsuransiPerjalananComponent } from './asuransiPerjalanan/asuransiPerjalanan.component';
import { AsuransiMobilComponent } from './asuransiMobil/asuransiMobil.component';
import { DetailPromoComponent } from './detailPromo/detailPromo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AsuransiMobilCariComponent } from './asuransiMobilCari/asuransiMobilCari.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SemuaProdukComponent,
    AsuransiSayaComponent,
    AsuransiJiwaComponent,
    AsuransiKesehatanComponent,
    AsuransiJiwaPilihComponent,
    AsuransiJiwaDetailComponent,
    AsuransiJiwaDataComponent,
    AsuransiJiwaPembayaranComponent,
    AsuransiJiwaKonfirmasiComponent,
    AsuransiJiwaInformasiComponent,
    AsuransiJiwaDetailStatusComponent,
    AsuransiPerjalananComponent,
    AsuransiMobilComponent,
    AsuransiMobilCariComponent,
    DetailPromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'SemuaProduk', component: SemuaProdukComponent },
        { path: 'AsuransiSaya', component: AsuransiSayaComponent },
        { path: 'AsuransiJiwa', component: AsuransiJiwaComponent },
        { path: 'AsuransiKesehatan', component: AsuransiKesehatanComponent },
        { path: 'PilihJiwa', component: AsuransiJiwaPilihComponent },
        { path: 'JiwaDetail', component: AsuransiJiwaDetailComponent },
        { path: 'JiwaData', component: AsuransiJiwaDataComponent },
        { path: 'JiwaPembayaran', component: AsuransiJiwaPembayaranComponent },
        { path: 'JiwaKonfirmasi', component: AsuransiJiwaKonfirmasiComponent },
        { path: 'JiwaInformasi', component: AsuransiJiwaInformasiComponent },
        { path: 'JiwaDetailStatus', component: AsuransiJiwaDetailStatusComponent },
        { path: 'AsuransiPerjalanan', component: AsuransiPerjalananComponent },
        { path: 'AsuransiMobil', component: AsuransiMobilComponent },
        { path: 'CariMobil', component: AsuransiMobilCariComponent },
        { path: 'DetailPromo', component: DetailPromoComponent }
      ]
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
