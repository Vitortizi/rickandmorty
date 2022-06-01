import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  id: any;
  type: any;
  items: any;
  data: any;
  thereAreCharacters = true;
  searchTerm: any;

  constructor(private route: ActivatedRoute, public callApi: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.type = params.get('type');
    })

    this.details();
  }

  details() {
    this.callApi.getDetail(this.id, this.type).subscribe(async (res) => {
      var array = [];
      var response = res.characters ? res.characters : res.residents;

      if (response.length > 0) {
        for (let e = 0; e < response.length; e++) {
          array.push(response[e].split('character/')[1])
        }

        this.callApi.getMultiCharacter(array).subscribe(async (res) => {
          if (res.image) {
            this.items = [res];
          } else if (res.length > 0) {
            this.items = res;
          }
        })
      } else {
        this.thereAreCharacters = false;
      }
    })
  }

  filterCharacters(searchString: string) {
    return this.items.filter((data: any) => data.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
}
