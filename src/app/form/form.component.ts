import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {MatDialog} from "@angular/material/dialog";

export interface Person {
  name: string;
  surname: string;
  vaccine_name: string;
  count: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  people: Person[] = []
  name: string;
  surname: string;
  vaccine_name: string;
  count: string;

  constructor(private service: ServiceService, private dialog: MatDialog) {
  }

  addPerson() {
    if(this.name == '' || this.surname == '' || this.vaccine_name == '' || this.count == undefined) {
      this.dialog.open(DialogWarning);
      return
    }
    if(!Number.isInteger(+this.count) || +this.count <= 0 || +this.count > 9) {
      this.dialog.open(DialogWarning);
      return
    }

    let person = {name: this.name, surname: this.surname, vaccine_name: this.vaccine_name, count: +this.count};
    this.people.push(person)
    this.service.subject.next(this.people);
    this.name = '';
    this.surname = '';
    this.vaccine_name = '';
    this.count = '';
  }
}
@Component({
  selector: 'dialog-warning',
  templateUrl: './dialog-warning.html',
})
export class DialogWarning {}
