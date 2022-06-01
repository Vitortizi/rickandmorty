import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterActionType, GetCharacterSuccess, GetCharacterFailed } from './character.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { CharacterService } from 'src/app/services/api/api.service';
import { Character } from '../models/character';

@Injectable()
export class CharacterEffects {

    constructor(
        private actions$: Actions,
        private todosService: CharacterService
    ) { }

    getTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CharacterActionType.GET_CHARACTER),
            switchMap(() => 
                this.CharacterService.getAPITodos().pipe(
                    map((character: Array<Character>) => new GetCharacterSuccess(character)),
                    catchError(error => of(new GetCharacterFailed(error)))
                )
            )
        )
    );
}