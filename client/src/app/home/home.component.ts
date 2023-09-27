import { Component } from '@angular/core';

import { User } from '@app/_models';
import { BookClub } from '@app/_models/bookClub';
import { AccountService, BookClubService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    bookClubs: BookClub[];


    constructor(private accountService: AccountService, private bookClubService: BookClubService) {
        this.user = this.accountService.userValue;
        this.bookClubService.getAll()
        .toPromise()
        .then(clubs => {
            this.bookClubs = clubs
        })
    }

    logout() {
        this.accountService.logout();
    }
}