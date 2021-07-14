import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search = new FormControl('');
  users?: User[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
