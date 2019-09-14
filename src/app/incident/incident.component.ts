import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';
import { Incident } from './../models/incident';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  incident: Incident;
  items: Incident[] = [{
    id: 1,
    entity: 'visit',
    entityList: ['visit', 'patient'],
    operatorList: ['equal to', 'greater than', 'smaller than', 'greater than & equal to'],
    operator: 'equal to',
    value: 'lets say something',
    operatorStatus: ''
  }, {
    id: 2,
    entity: 'patient',
    entityList: ['visit', 'patient'],
    operator: 'greater than',
    operatorList: ['equal to', 'greater than', 'smaller than', 'greater than & equal to'],
    value: 'lets say something',
    operatorStatus: ''
  }
];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.incident = this.items[0];
  }
  addRow(index: number){
    const incident = new Incident('select', ['visit', 'patient'], 'select', ['equal to', 'greater than', 'smaller than', 'greater than & equal to'], '');
    console.log('get incident :', this.items);
    this.items.push(incident);
  }
  cancelRow(index: number){
    this.items.splice(index, 1);
  }
  onSubmit() {

    console.log('get list of incident :', this.items)
  }
  toggle(value: string){
    if (value === 'AND') {

    }
  }
}
