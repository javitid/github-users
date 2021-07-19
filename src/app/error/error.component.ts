import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public error?: HttpErrorResponse;

  constructor(
    private _dataService: DataService,
    public _router: Router,
) { }

  ngOnInit(): void {
    this.error = this._dataService.getHttpError() as HttpErrorResponse;
  }

  public goToOverview(): void {
    this._router.navigateByUrl('overview');
  }
}
