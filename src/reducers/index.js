import { combineReducers } from 'redux';

// Reducers
import gameReducer from './gameReducer';

// Combine Reducers
const reducers = combineReducers({
    gameState : gameReducer,
});

export default reducers;