import React, { Component } from 'react'
import './style.css'

class ListaDeCategorias extends Component {
  _handleInputEvent(e) {
    if (e.key != 'Enter') {
      return
    }
    this.props.adicionarCategoria(e.target.value)
  }

  renderCategorias() {
    return this.props.categorias.map((c, index) => {
      return <li className="lista-categorias_item" key={index}>{c}</li>
    })
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">{this.renderCategorias()}</ul>
        <input
          type='text'
          placeholder='Adicionar categoria'
          onKeyUp={this._handleInputEvent.bind(this)}
          className="lista-categorias_input"
        />
      </section>
    )
  }
}

export default ListaDeCategorias
