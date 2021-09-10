import React from "react";
import CajaOpciones from "./CajaOpciones.jsx";
import CajaHistorial from "./CajaHistorial.jsx";
import data from "./data.json";

class Section extends React.Component{ //Responsabilidad: Contener todos los componentes.
  state = {
    historia: "",
    opcionA: "",
    opcionB: "",
    opcionElegida: "",
    historialDeOpciones: []
  };

  contador = 1;

  handleOpcionA = () => {
    this.contador++;
    for (let i = 0; i < data.length; i++) {
      let Opc = data[i].id;
      if (Opc === this.contador + "a") {
        this.setState({
          historia: data[i].historia,
          opcionElegida: "A",
          opcionA: data[i].opciones.a,
          opcionB: data[i].opciones.b,
        });
        this.state.historialDeOpciones.push("A")
      }
    }
  };

  handleOpcionB = () => {
    this.contador++;
    for (let i = 0; i < data.length; i++) {
      let Opc = data[i].id;
      if (Opc === this.contador + "b") {
        this.setState({
          historia: data[i].historia,
          opcionElegida: "B",
          opcionA: data[i].opciones.a,
          opcionB: data[i].opciones.b,
        });
        this.state.historialDeOpciones.push("B")
      }
    }
  };

  componentDidMount(){
    this.setState({
      historia: data[0].historia,
      opcionA: data[0].opciones.a,
      opcionB: data[0].opciones.b
    })
  };

  historialDeOpciones = (props, index) => {
    const items = props.items;
    const listItems = items.map((item) =>
    <li key = {index} > {item} </li>
    )
    return(
      <ul> {listItems} </ul>
    )
  }

  render () {
    return (
      <React.Fragment>
        <section class="layout">

          <h1 class="historia">
            {this.state.historia}
          </h1>
          
          <CajaOpciones
          handleClickA = {this.handleOpcionA}
          handleClickB = {this.handleOpcionB}
          opcionA = {this.state.opcionA}
          opcionB = {this.state.opcionB}
          />
          
          <CajaHistorial
          seleccionPrevia = {this.state.seleccionPrevia}
          historial = {this.state.historialDeOpciones.map(
            (e, index) => (
              <li key={index}> {e} </li>
            ),
            data[this.contador].id
          )}
          />
          
        </section>
      </React.Fragment>
    )
  }
};

export default Section;