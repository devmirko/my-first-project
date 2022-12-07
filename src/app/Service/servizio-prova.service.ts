import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  comix = [{
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/AC1000_DLX_162-001_HD_5ba13723281ab0.37845353.jpg?itok=ZsI-C5eX",
    price: 19.99,
    series: "Action Comics",
    type: "comic book",
    status: true
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/09/AV1976_01_300-001_HD_5f738f6e39ddd7.18205602.jpg?itok=VgdYdJ01",
    price: 3.99,
    series: "American Vampire 1976",
    type: "comic book",
    status: false
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2018/08/AQMv4_UW_153-001_HD_5b7efa1745a9b8.08589135.jpg?itok=HPTtnrsb",
    price: 16.99,
    series: "Aquaman",
    type: "graphic novel",
    status: true
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/batgirl_v5_1_5b23e1f1124941.50950783.jpg?itok=VnrJah76",
    price: 2.99,
    series: "Batgirl",
    type: "comic book",
    status: true
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/BM_56_300-001_HD_5ba137a85c3bf3.33122291.jpg?itok=3FHJQYJZ",
    price: 3.99,
    series: "Batman",
    type: "comic book",
    status: false

  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/BM_56_300-001_HD_5ba137a85c3bf3.33122291.jpg?itok=3FHJQYJZ",
    price: 2.99,
    series: "Batman Beyond",
    type: "comic book",
    status: true
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/08/BMSM_5d4361b7116261.74371456.jpg?itok=kEDR2OL8",
    price: 3.99,
    series: "Batman/Superman",
    type: "comic book",
    status: false
  },
  {
    thumb: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/09/BMSMANN_01_300-001_HD_5f5ff17fa1d665.74704970.jpg?itok=azz5sfGk",
    price: 4.99,
    series: "Batman/Superman Annual",
    type: "comic book",
    status: true
  },

]

  constructor() { }

  getComix(){
    return
  }
}
