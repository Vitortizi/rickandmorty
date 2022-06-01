import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  items: any;

  constructor(public callApi: ApiService) { }

  ngOnInit(): void {
    this.callApi.getCharacter().subscribe(async (res) => {
      this.items = res.results;
    })
  }

}
