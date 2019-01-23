import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Chat} from '../models/chat';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) {
  }


  public queryAll(): Observable<Chat[]> {
    return this.http.get<Chat[]>(environment.api_url + '/chat_room')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
