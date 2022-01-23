import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Person} from "./form/form.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  subject = new Subject<Person[]>();

  getPeople(): Observable<Person[]> {
    return this.subject.asObservable();
  }
}
