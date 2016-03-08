import { GET_RESUME } from '../actions/constants';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_RESUME:
            return {};
        default:
            return state;
    }
}