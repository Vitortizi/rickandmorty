import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  searchTerm: any;
  items: any;

  constructor(public callApi: ApiService) { }

  ngOnInit(): void {
    this.callApi.getEpisode().subscribe(async (res) => {
      this.items = res.results;
    })
  }
}
