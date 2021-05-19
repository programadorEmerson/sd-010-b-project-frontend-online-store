import React from 'react';

class Rating extends React.Component {

    render(){
        const { id } = this.props;
        const value = JSON.parse(localStorage.getItem(id));
        return (
            <div>
                { Array.isArray(value) ? value.map((rating, index) => <p key={index}>{ rating }</p>) : null}
            </div>
        );
    }
}

export default Rating;