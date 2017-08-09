import React, { Component } from 'react';
import Square from './Square';

class Table extends Component {

    render() {
        return (
            <div className="row">
                {this.props.squares.map(el => <Square key={el.item} data={el}/>)}
            </div>
        );
    }
}

export default Table;