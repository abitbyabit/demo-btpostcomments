import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, first, mergeMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { postConfig } from '../config/post-config';
import { IComment } from '../shared/interface/IComment';
import { IPost } from '../shared/interface/IPost';
import { IUser } from '../shared/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  userUrl: string = `${environment.api.base}${environment.api.users}`;
  postURL: string = `${environment.api.base}${environment.api.posts}`;
  commentURL: string = `${environment.api.base}${environment.api.comments}`;
  constructor(private http: HttpClient) { }
  getPosts(params?: string): Observable<IPost[]> {
    const url = params ? `${this.postURL}?${params}` : `${this.postURL}`
    return this.http.get<IPost[]>(url)
      .pipe(
        // tap((data) => console.log(JSON.stringify(data))),
        map((data: IPost[]) => {
          // fake api fetch limit filter, refactor it if the api suppport limit filter fetch
          //only get limited posts if the limit filter is specified
          const limitFilter = `limit=${postConfig.fetchLimit}`
          if (params && params.indexOf(limitFilter) > -1) {
            return data.slice(0, postConfig.fetchLimit);
          } else {
            return data;
          }
        }),
        catchError(this.handleError)
      );
  }
  getComments(params?: string): Observable<IComment[]> {
    const url = params ? `${this.commentURL}?${params}` : `${this.commentURL}`
    return this.http.get<IComment[]>(url)
      .pipe(
        // tap((data) => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl)
      .pipe(
        // tap((data) => console.log(JSON.stringify(data))),
        map((data) => {
          let users = data.map((user: IUser) => {
            return { ...user, firstName: user.name.split(' ')[0] }
          })
          return users;
        }),
        catchError(this.handleError)
      );
  }
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
