import { GET_POKEMONS, FILTER_NAME, FILTER_BY_TYPE, GET_TYPE, FILTER_AZ, FILTER_SCORE, FILTER_BD, POKEMON_DETAIL, POST_POKEMON, CLEAN } from '../actions/actions'

const initialState = {
    pokemons: [],
    types: [],
    pokeDetail:{},
    allPokemons:[]
}

function rootReducer(state = initialState, action ){
    switch ( action.type ){

        default:
            return state;

    }
}

export default rootReducer;