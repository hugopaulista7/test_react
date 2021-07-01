export default class ListaNotas {
    constructor() {
        this.notas = []
    }

    adicionarNota(titulo, texto, categoria) {
        const nota = new Nota(titulo, texto, categoria)

        this.notas.push(nota)
    }

    apagarNota(index) {
        this.notas.splice(index, 1)
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}