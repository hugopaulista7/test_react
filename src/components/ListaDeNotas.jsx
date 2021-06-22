import React, { Component } from "react";
import { CardNota } from "./";

class ListaDeNotas extends Component {
  renderList() {
    const array = Array.of("Trabalho", "Trabalho", "Estudos");
    return array.map((c) => (
      <li>
        <div>{c}</div>
        <CardNota />
      </li>
    ));
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
export default ListaDeNotas;
