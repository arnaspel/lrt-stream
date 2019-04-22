import {HttpClient} from '@angular/common/http';

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root" })
export class StreamService {

  constructor(private http: HttpClient) {}

  getStream() {
    return this.http.get('http://localhost:3000/api/stream');
  }
}
