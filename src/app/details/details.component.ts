import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user?: User;

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.user = this._dataService.getSelectedUser();
  }

}
