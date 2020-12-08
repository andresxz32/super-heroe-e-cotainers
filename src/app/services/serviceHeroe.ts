import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SuperHeroModel } from '../shared/models/superHeroModel';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { SUPERHERO } from 'src/environments/environment';
import { map } from 'rxjs/operators';


// const SUPERHEROE_KEY = makeStateKey('superHeroe');
// const SUPERHEROES_KEY = makeStateKey('superHeroes');
const SUPERHEROES_RANDOM_IDS_KEY = makeStateKey('superHeroesIds');

@Injectable({ providedIn: 'root' })
export class SuperHeroService {
    private _superHeroesIds: number[] = []
    private _superHero: SuperHeroModel[] = null
    private _superHeroes: SuperHeroModel[] = []

    constructor(
        private _state: TransferState,
        private _http: HttpClient,
        @Inject(PLATFORM_ID) private _platform: Object
    ) {

    }

    getHeroes(index) {
        this._superHero = this._state.get<SuperHeroModel[]>(SUPERHEROES_RANDOM_IDS_KEY, null);
        if (!this._superHero) {
            return this._http.get<SuperHeroModel>(`${SUPERHERO.RESOURCE.ID}${index}.json`)
                                .pipe(map((data:SuperHeroModel) => <SuperHeroModel> data));                      
        }
    }
}