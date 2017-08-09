// import _ from 'underscore';

const initialState = {
    select_id_1 : null,
    select_id_2 : null,

    select_code_1 : null,
    select_code_2 : null,
    squares       : [],

    player1 : 0,
    player2 : 0,

    order : 1,
};

let updatedList = [];

const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GAME_SQUARE_CLICK':

            updatedList = closeAllNotDoneSq(state.squares);
            updatedList = openSq(updatedList, action.itemId);

            if (!state.select_id_1 || (state.select_id_1 && state.select_id_2)) {
                console.log('FIRST CLICK');
                return {
                    ...state,
                    select_id_1 : action.itemId,
                    select_id_2 : null,

                    select_code_1 : action.code,
                    select_code_2 : null,

                    squares : updatedList,
                };
            } else {
                console.log('SECOND CLICK');
                let order = state.order === 1 ? 2 : 1; // Change order

                let player1 = state.player1, player2 = state.player2;

                // If equals
                if (state.select_code_1 === action.code) {
                    console.log('EQUALS');
                    updatedList = doneSq(state.squares, state.select_code_1, action.code);
                    order = state.order; // If win don`t change order

                    if (order === 1) {
                        player1++
                    } else {
                        player2++
                    }

                }

                return {
                    ...state,
                    select_id_1 : state.select_id_1,
                    select_id_2 : action.itemId,

                    select_code_1 : state.select_code_1,
                    select_code_2 : action.code,

                    squares : updatedList,
                    player1,
                    player2,
                    order,
                };
            }

        case 'GAME_SQUARES_FILL':
            return {
                ...state,
                squares : action.squares,
            };

        default:
            return state;

    }

}

function openSq(st, itemId) {
    let newSquares = st.slice(); // Clone state
    console.log(newSquares);

    for (let i in newSquares) {
        if (newSquares[i].item === itemId) {
            newSquares[i].open = true;
        }
    }
    return newSquares;
}

function closeAllNotDoneSq(st) {
    console.log('close all not done');
    let newSquares = st.slice(); // Clone state
    for (let i in newSquares) {
        if (newSquares[i].open && !newSquares[i].done) {
            newSquares[i].open = false;
        }
    }
    return newSquares;
}

function doneSq(st, item_code_1, item_code_2) {
    let newSquares = st.slice(); // Clone state

    for (let i in newSquares) {
        if (newSquares[i].code === item_code_1 || newSquares[i].code === item_code_2) {
            newSquares[i].done = true;
        }
    }
    return newSquares;
}

export default gameReducer;