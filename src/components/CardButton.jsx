import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardButton extends Component {
    render() {
        return (
            <div>
                <Link to="/card" data-testid="shopping-cart-button">Cart</Link>
            </div>
        )
    }
}

export default CardButton;
