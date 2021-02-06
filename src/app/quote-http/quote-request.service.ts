import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quoteinComponent: Quote;

  constructor(private http: HttpClient) {

    this.quoteinComponent = new Quote("", "");
  }

  quoteRequest() {
    interface ApiResponse {
      quote: string;
      author: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.quoteinComponent.quote = response.quote
        this.quoteinComponent.author = response.author

        resolve()
      },
        error => {
          this.quoteinComponent.quote = "Never, never, never give up"
          this.quoteinComponent.author = "Winston Churchill"

          reject(error)
        })
    })
    return promise
  }
}




