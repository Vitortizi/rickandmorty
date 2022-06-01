import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  searchTerm: any;
  items: any;

  constructor(public callApi: ApiService) { }

  ngOnInit(): void {
    this.callApi.getLocation().subscribe(async (res) => {
      this.items = res.results;
    })
  }

}
