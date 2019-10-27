import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnDestroy {
  searchResults: any[] = [];
  subscription: Subscription;
  usersPromo: any;

  constructor(private usersService: UsersService) {
    this.subscription = this.usersService.getUsers().subscribe(users => {
      this.searchResults = users && users.length ? users : [];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

  chooseUser(user: any): void {
    this.usersPromo = user;
  }

}
