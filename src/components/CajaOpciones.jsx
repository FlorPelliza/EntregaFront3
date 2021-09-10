import React from 'react';

class CajaOpciones extends React.Component { //Responsabilidad: contener los botones de selección.
  render() {
    return (
      <div class="opciones">
        <div class="opcion">
          <button id="A" class="botones" onClick={this.props.handleClickA}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div class="opcion">
          <button id="B" class="botones" onClick={this.props.handleClickB}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    )
  }


}

export default CajaOpciones;