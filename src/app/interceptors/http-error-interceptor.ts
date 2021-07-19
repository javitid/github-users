import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { DataService } from '../data.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private _dataService: DataService,
      ) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError( (error: HttpErrorResponse) => {
                this._dataService.setHttpError(error);
                return throwError(error);
            })
        );
    }
}