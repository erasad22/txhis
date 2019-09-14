import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  template: any;
  templates: any[] = [
    {
      id: 1,
      incident: 'mail',
      subject: 'Subject',
      body: { name: 'Mr. Anil kumar', plainText: 'visited for ', content: 'dermotologist' },
      footer: 'Footer'
    },
    {
      id: 2,
      incident: 'whatsapp',
      subject: 'Subject',
      body: { name: 'Mr. Prakash kumar', plainText: 'visited for ', content: 'Neurologist' },
      footer: 'Footer'
    },
    {
      id: 3,
      incident: 'sms',
      subject: 'Subject',
      body: { name: 'Mr. Abhay deol', plainText: 'visited for ', content: 'Heart desease' },
      footer: 'Footer'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.template = this.templates[0];
  }

}
