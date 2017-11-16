import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleServiceProvider {
  data: any = null;

  constructor(public http: Http) {
    console.log('Hello User!');
  }

  load(i) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    var pinNumber;
    pinNumber = i;

    return new Promise(resolve => {
      this.http.get('https://smartmory-pi.onlosant.com/gpio/'+pinNumber)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  // nfcStatus() {
  //   return new Promise(resolve => {
  //     this.http.get('https://smartmory-pi.onlosant.com/nfcResponse')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }

}
