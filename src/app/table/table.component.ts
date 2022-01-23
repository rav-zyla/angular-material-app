import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Person} from "../form/form.component";
import {ServiceService} from "../service.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
    displayedColumns: string[] = ['position', 'name', 'surname', 'vaccine', 'count'];
  dataSource = new MatTableDataSource<Person>([]);

  @ViewChild(MatTable) table: MatTable<Person>;

  constructor(private service: ServiceService) {
    service.getPeople().subscribe((people: Person[]) => this.dataSource.data = people);
  }
}
