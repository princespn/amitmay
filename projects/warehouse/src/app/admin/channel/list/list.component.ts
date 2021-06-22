import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'gomco-channel-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resourcePath = 'channels';
  resource = 'channels';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          key: 'name',
          type: 'input',
          templateOptions: {
            // label: 'query',
            placeholder: 'name',
            required: false,
          },
        }
      ]
    }
  ];

  columns = [
    {
      key: 'name',
      label: 'Name',
    }
  ];

  actions = {
    edit: {}
  };

  batchActions = {
    delete: {}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
