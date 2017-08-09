import React, { Component } from 'react';
import store from '../../store';

class Square extends Component {

    squareClick(e) {
        e.preventDefault();

        store.dispatch({
            type   : 'GAME_SQUARE_CLICK',
            itemId : this.props.data.item,
            code   : this.props.data.code
        });
    }

    im() {
        let res = '';

        // If not open and not done
        if (!this.props.data.open && !this.props.data.done) {
            res = <div className="btn btn-primary door"
                       onClick={this.squareClick.bind(this)}>Show</div>;
        } else {
            res = <img src={this.props.data.img}/>
        }

        if (this.props.data.done) {
            res = <div className="done"><img src={this.props.data.img}/></div>; //
        }

        return (
            <div className="text-center">
                {res}
            </div>
        )
    }

    render() {
        return (
            <div className="col-3 square d-flex align-items-center justify-content-center">
                {this.im()}
                {this.props.data.code}
            </div>
        );
    }
}

export default Square;