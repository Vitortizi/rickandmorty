import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  id: any;
  items: any;

  constructor(private route: ActivatedRoute, public callApi: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.callApi.getCharacterDetails(this.id).subscribe(async (res) => {
      this.items = res;
    })
  }
}
