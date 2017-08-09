import React, { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {

    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Player One</td>
                        <td>{this.props.player1}</td>
                    </tr>
                    <tr>
                        <td>Player Two</td>
                        <td>{this.props.player2}</td>
                    </tr>

                    <tr>
                        <td>Order</td>
                        <td>{this.props.order}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        player1 : state.gameState.player1,
        player2 : state.gameState.player2,
        order   : state.gameState.order,
    };
};

export default connect(mapStateToProps)(Score);