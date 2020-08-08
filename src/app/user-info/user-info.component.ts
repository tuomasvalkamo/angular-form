import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  users: Object;

  windowVisible: boolean = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
