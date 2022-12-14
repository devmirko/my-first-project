import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  urlFumetti = "https://my-project-9bfb2-default-rtdb.europe-west1.firebasedatabase.app/fumetti"

  constructor(private http: HttpClient) { }

  insertFumetto(url : string, data : {} ){
    return this.http.post(url, data)
  }

  getFumetti(url: string) {
    return this.http.get(url)
  }


  getFumetto(url: string, id: string){
    return this.http.get(`${url}/${id}.json`)
  }





}
