import { Component } from "react";
import { FormularioCadastro, ListaDeNotas } from "./components";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    )
  }
}

export default App;
