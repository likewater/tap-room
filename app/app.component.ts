import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>KEG-EKG</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSellPintSender)="sellPint($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg: null;

  masterKegList: Keg[] = [
    new Keg('Drop Top Amber Ale', 'Widmer Brothers', 'Amber', 5, '5.3'),
    new Keg('Union Pilsner', 'Old Town Brewing', 'Pilsner', 5, '5.0'),
    new Keg('Blue Dot Double India Pale Ale', 'Hair Of The Dog', 'Pale Ale', 5, '7.0')
  ];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sellPint(currentKeg) {
    if (currentKeg.pintsLeft >= 1) {
      currentKeg.pintsLeft = currentKeg.pintsLeft - 1;
    } else {
      currentKeg.empty = true;
    }
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
