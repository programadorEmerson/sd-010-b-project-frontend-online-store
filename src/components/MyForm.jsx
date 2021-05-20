import React from 'react';

class MyForm extends React.Component {
  render() {
    const url = 'https://images.vexels.com/media/users/3/139353/isolated/preview/ae19f723e2e223ce9ab2a5cb6f7dc7b4-estrela-estrela-arredondada-by-vexels.png';
    return (
      <form>
        <fieldset>
          <legend><h2>Avalições</h2></legend>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="E-mail"
            />
            <img
              className="estrela"
              src={ `${url}` }
              alt=""
            />
            <img
              className="estrela"
              src={ `${url}` }
              alt=""
            />
            <img
              className="estrela"
              src={ `${url}` }
              alt=""
            />
            <img
              className="estrela"
              src={ `${url}` }
              alt=""
            />
            <img
              className="estrela"
              src={ `${url}` }
              alt=""
            />
          </div>
          <textarea
            name=""
            data-testid="product-detail-evaluation"
            cols="30"
            rows="10"
            placeholder="Mensagem(opcional)"
          />
          <div>
            <button type="submit">Avaliar</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default MyForm;
