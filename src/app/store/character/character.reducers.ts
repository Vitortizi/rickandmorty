import { CharacterActions, CharacterActionType } from './character.actions';

export const initialState = {};

export function characterReducer(state = initialState, action: CharacterActions) {

    switch (action.type) {

        case CharacterActionType.GET_CHARACTER: {
            return { ...state };
        }

        case CharacterActionType.GET_CHARACTER_SUCCESS: {
            return {
                ...state,
                characterList: action.payload,
            };
        }

        case CharacterActionType.GET_CHARACTER_FAILED: {
            return { ...state };
        }

        default: {
            return state;
        }
    }
}