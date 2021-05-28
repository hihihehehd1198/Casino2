import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { getDatabaseFirebase, getDataBase } from 'firebase/database';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CasinoServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'my-auth-token'
    }),
  };
  public getListCasino(): Observable<any> {
    //detail
    const REST_API_SERVER = 'http://localhost:3000';

    const url = `${REST_API_SERVER}/CasinoList`;
    return this.HttpClient.get<any>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  constructor(
    private HttpClient: HttpClient,
    private db: AngularFireDatabase
  ) {}
  public CasinoList?: AngularFireList<any>;

  public getDatabaseFirebase(): Observable<any> {
    this.CasinoList = this.db.list('CasinoList');
    // this.CasinoList.valueChanges().subscribe((data) => {
    //   console.log('database realtime : ');
    //   console.log(data);
    //   console.log('database realtime : ');
    // });
    return this.CasinoList.valueChanges();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('bug : ', error.error.message);
    } else {
      console.error(`error : ${error.status}` + `body was : ${error.error}`);
    }
    return throwError('have bug , so try again later');
  }
}
