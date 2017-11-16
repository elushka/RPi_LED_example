import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})
export class HomePage {
  public people: any;
  public compartments: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
              public peopleService: PeopleServiceProvider) {
                this.compartments = [
                  "MacBook Pro 15",
                  "MacBook Air 13",
                  "Lenovo ThinkPad",
                  "MacBook Pro 13",
                  "MacBook Pro 15",
                  "Lenovo ThinkPad",
                  "MacBook Air 11",
                  "Empty Compartment",
                  "MacBook Pro 13",
                  "MacBook Pro 15",
                ];
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Laptop returned successfully!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Please return the correct device.',
      duration: 2000,
    });
    toast.present();
  }

  actLock(i){
    this.peopleService.load(i)
    .then(data => {
      this.people = data;
    });
  }

  // nfcState(){
  //   this.peopleService.nfcStatus()
  //   .then(data => {
  //     this.people = data;
  //   });
  //   return $nfcStatus;
  // }

  ShelfUnlock(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Unlocked!',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

}
