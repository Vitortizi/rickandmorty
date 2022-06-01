import { Action } from '@ngrx/store';
import { Character } from '../models/character';


export enum CharacterActionType {
    GET_CHARACTER = 'GET_CHARACTER',
    GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS',
    GET_CHARACTER_FAILED = 'GET_CHARACTER_FAILED',
}

export class GetCharacter implements Action {
    readonly type = CharacterActionType.GET_CHARACTER;
}

export class GetCharacterSuccess implements Action {
    readonly type = CharacterActionType.GET_CHARACTER_SUCCESS;
    constructor(public payload: Array<Character>) { }
}

export class GetCharacterFailed implements Action {
    readonly type = CharacterActionType.GET_CHARACTER_FAILED;
    constructor(public payload: string) { }
}

export type CharacterActions = GetCharacter | GetCharacterSuccess | GetCharacterFailed;