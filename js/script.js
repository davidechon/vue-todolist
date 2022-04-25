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
// [x] 6. Milestone 3 => A. Aggiungo un campo di input testuale
// [x] 7. Milestone 3 => B. Aggiungo un pulsante "aggiungi"
// [x] 8. Milestone 3 => C. cliccando sul pulsante 3.B, il testo digitato viene letto e utilizzato per creare un nuovo todo
// [x] 9. Milestone 3 => D. Aggiungo 3.C alla lista dei todo esistenti
// [x] 10. Bonus 1 => Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// [x] 11. Bonus 2 => cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

/////////////////////////////
// const todoApp = new Vue({
//   el: '#todoApp',
//   data: {
//     attivitaItems: [
//       {
//         text: "stringa di testo del todo",
//         done: false,
//       },
//       {
//         text: "seconda stringa di testo del todo",
//         done: false,
//       },
//       {
//         text: "terza stringa di testo del todo",
//         done: false,
//       },
//     ],
//     nuovaAttivita : '',
//   },
//   methods: {

//     aggiungi() {
//       const attivita = {
//         done: false,
//         text: this.nuovaAttivita,
//       }
//       this.attivitaItems.push(nuovaAttivita)
//       console.log(nuovaAttivita)

//     },

//     rimuovi(i) {
//       this.attivitaItems.splice(i, 1)
//     }

//   }

// })


///// Check Esercizio ////////////////////////////////////////////
const toodolist = new Vue({
  el: '#todoApp',
  data: {
    attivitaItems: [
      {
        id: 1,
        check: false,
        nomeAttivita: 'Quarterly Newsletter',
        category: 'Editorial',
      },
      {
        id: 2,
        check: false,
        nomeAttivita: 'Recruiting blog post',
      },
      {
        id: 3,
        check: false,
        nomeAttivita: 'Mobile app launch',
      },
      {
        id: 4,
        check: false,
        nomeAttivita: 'Interview John H.',
      },
      {
        id: 5,
        check: false,
        nomeAttivita: 'Summit update to mobile storefonts',
      },
      {
        id: 6,
        check: false,
        nomeAttivita: 'Schedule meeting with Alex',
      },
    ],
    nuovaAttivita: '',

  },
  methods: {
    aggiungi() {
      const attivita = {
        check: false,
        nomeAttivita: this.nuovaAttivita,
      }
      this.attivitaItems.push(attivita)
    },
    rimuovi(i) {
      this.attivitaItems.splice(i, 1)
    }


  },

  
})
