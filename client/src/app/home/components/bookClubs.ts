import { Component } from '@angular/core';

import { User } from '@app/_models';
import { BookClub } from '@app/_models/bookClub';
import { AccountService, BookClubService } from '@app/_services';

@Component({ selector: "book-clubs", templateUrl: 'bookClubs.html', styleUrls: ["./bookClubs.scss"] })
export class BookClubs {
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

    toggleFavourite(club: BookClub) {
        const index = this.user.favouriteClubs.indexOf(club.name)
        console.log("index", index)
        index === -1
            ? this.user.favouriteClubs.push(club.name)
            : this.user.favouriteClubs.splice(index, 1)
        console.log(this.user.favouriteClubs)
        this.accountService.update(this.user.username, this.user)
    }

    getFavouriteSrc(club: BookClub) {
        const NONE_FAVOURITE_CLUB = "assets/svg/heart-empty.svg";
        const FAVOURITE_CLUB = "assets/svg/heart-filled.svg";
        return this.user.favouriteClubs.includes(club.name) ?  FAVOURITE_CLUB : NONE_FAVOURITE_CLUB
    }
}