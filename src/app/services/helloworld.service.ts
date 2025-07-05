import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface Greeting {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  readonly #apiBaseUrl = 'http://localhost:8080/api';

  constructor(private readonly http: HttpClient) { }

  getGreetings(name?: string): Observable<Greeting> {
    return this.http.get<Greeting>(`${this.#apiBaseUrl}/hello-world/greetings`, {
      headers: { 'user': 'o11y' },
      ...(name && { params: { name } }) // add param name if it is present
    });
  }
}
