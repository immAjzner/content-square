import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchInput = '';
  showResults = true;
  names;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  searchUsers() {
    if (!this.showResults) { return; }
    this.showResults = false;
    setTimeout(() => {
      this.usersService.getNames(this.searchInput).subscribe(names => {
        this.names = names.body;
      });
      this.getUsersDetails();
      this.showResults = true;
    }, 300);
  }

  getUsersDetails(name?) {
    const searchName = name ? name.split(' ')[0] : this.searchInput;
    this.usersService.findUsers(searchName);
  }

}
