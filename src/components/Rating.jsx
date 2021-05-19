import React from 'react';
import '../styles/rating.css';

class Rating extends React.Component {
  render() {
    return (
      <div>
        Avaliação
        <form>
          <label htmlFor="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </label>
          <div className="star-rating">
            <input type="radio" name="rating" value="1" />
            <i />
            <input type="radio" name="rating" value="2" />
            <i />
            <input type="radio" name="rating" value="3" />
            <i />
            <input type="radio" name="rating" value="4" />
            <i />
            <input type="radio" name="rating" value="5" />
            <i />
            <input type="radio" name="rating" value="6" />
            <i />
            <input type="radio" name="rating" value="7" />
            <i />
            <input type="radio" name="rating" value="8" />
            <i />
            <input type="radio" name="rating" value="9" />
            <i />
            <input type="radio" name="rating" value="10" />
            <i />
          </div>
          <div>
            <label htmlFor="textarea">
              <textarea
                data-testid="product-detail-evaluation"
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Menssagem (opcional)"
              />
            </label>
            <button type="submit">Avaliar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Rating;

// Referência: http://jsfiddle.net/tf3sn4m2/
