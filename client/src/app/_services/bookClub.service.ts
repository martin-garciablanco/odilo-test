import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookClub } from '@app/_models/bookClub';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class BookClubService {

    constructor(
        private http: HttpClient
    ) {}


    getAll() {
        return this.http.get<BookClub[]>(`${environment.apiUrl}/clubs`)
    }
}