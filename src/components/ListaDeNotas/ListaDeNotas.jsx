import React, { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css'

class ListaDeNotas extends Component {
  
  renderList() {
    return this.props.notas.map(({titulo, texto}, index) => (
      <li key={index} className="lista-notas_item">
        <CardNota titulo={titulo} texto={texto} apagarNota={this.props.apagarNota} indice={index}/>
      </li>
    ));
  }

  render() {
    return <ul className="lista-notas">{this.renderList()}</ul>;
  }
}
export default ListaDeNotas;
