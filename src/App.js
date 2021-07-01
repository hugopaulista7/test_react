import { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/App.css'
import './assets/index.css'
import Categorias from './data/Categorias'
import ListaNotas from './data/ListaNotas'

class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ListaNotas()
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          criarNota={this.notas.adicionarNota}
          categorias={this.categorias.categorias}
        />
        <main className='main'>
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.criarCategoria}
          />
          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota}
          />
        </main>
      </section>
    )
  }
}

export default App
