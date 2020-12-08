import { Component, OnInit, OnDestroy } from '@angular/core';
import { SuperHeroService } from '../../services/serviceHeroe';
import { SuperHeroModel } from '../../shared/models/superHeroModel';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
const SUPERHEROES_RANDOM_IDS_KEY = makeStateKey('superHeroesIds');
export const NUMBER_SUPERHEROES_FOR_LIST: number = 20;

@Component({
  selector: 'app-superhero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class SuperHeroListComponent implements OnInit, OnDestroy {
  public suscript: Subscription;
  public superHeroes: SuperHeroModel[] = [];
  constructor(
    private _superHeroService: SuperHeroService,
    private _state: TransferState,
  ) { 
  }


  ngOnInit() {
    this.getHeroes();

  }
  //
  getHeroes() {
    for (let i = 0; i <= NUMBER_SUPERHEROES_FOR_LIST; i++) {
      let index = Math.floor(Math.random() * 563);
      this.suscript = this._superHeroService.getHeroes(index).subscribe(
        (data: any) => {
          if (data) {
            this.superHeroes.push(data);
            console.log(this.superHeroes);
          }
          this._state.set<SuperHeroModel[]>(SUPERHEROES_RANDOM_IDS_KEY, null);
        },
        err => {
        }
      )
    }
  }

  ngOnDestroy(): void {
    if (this.suscript) {
      this.suscript.unsubscribe();
    }

  }
}
