import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../../store';

import Table from './Table';
import Score from './Score';

class Game extends Component {

    componentWillMount() {
        // Create images array
        let img = [];
        for (let i = 0; i < 8; i++) {
            img.push('http://thecatapi.com/api/images/get.php?api_key=MTAx&id=b0' + i)
        }

        img = img.concat(img); // Twice self
        img.sort(() => Math.random() * 2 - 1); // Random sort
        // console.log(img);

        let arr = [];
        for (let h = 0; h < 16; h++) {
            arr.push({
                item : h,
                img  : img[h],
                code : img[h].substr(img[h].length - 1),
                open : false,
                done : false
            })
        }

        store.dispatch({
            type    : 'GAME_SQUARES_FILL',
            squares : arr,
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Table squares={this.props.squares}/>
                    </div>
                    <div className="col-md-4">
                        <Score/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        squares : state.gameState.squares,
    };
};

export default connect(mapStateToProps)(Game);