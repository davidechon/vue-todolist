// Esercizio di oggi: Vue To Do List
// nome repo: vue-todolist
// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

/// Flowchart //////
// [x] 1. Prima devo crearmi l'oggetto
// [x] 2. Poi devo convertire l'html con il dinamico creato richiamando i dati dell'oggetto
// [x] 3. Milestone 1 => A. Stampo la lista in pagina
// [x] 4. Milestone 1 => B. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato
// [x] 5. Milestone 2 => Aggiungo una "x" ad ogni item per rimuoverlo dalla lista
// [_] 6. Milestone 3 => A. Aggiungo un campo di input testuale
// [_] 7. Milestone 3 => B. Aggiungo un pulsante "aggiungi"
// [_] 8. Milestone 3 => C. cliccando sul pulsante 3.B, il testo digitato viene letto e utilizzato per creare un nuovo todo
// [_] 9. Milestone 3 => D. Aggiungo 3.C alla lista dei todo esistenti
// [_] 10. Bonus 1 => Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// [x] 11. Bonus 2 => cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

/////////////////////////////
const todoApp = new Vue({
  el: '#todoApp',
  data: {
    lista: [
      {
        text: "stringa di testo del todo",
        done: false,
      },
      {
        text: "seconda stringa di testo del todo",
        done: true,
      },
      {
        text: "terza stringa di testo del todo",
        done: true,
      },
    ],
    newText: '',
  },
  methods: {
    aggiungi() {
      const attivita = {
        done: false,
        text: this.newText,
      }
      this.lista.push(newText)
    },
    rimuovi(i) {
      this.lista.splice(i, 1)
    }


  }

})


