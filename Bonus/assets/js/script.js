let app = new Vue({
  el: "#root",
  data: {
    mailList: [],
    beMail: "",
    number: {},
    arrayNumbers: [],
    color: "",
  },

  methods: {
    check: function (index) {
      

        if(this.arrayNumbers[index] <= 5){
            this.color = 'yellow';
        }
        if(this.arrayNumbers[index] > 5){
            this.color = 'green';
        }



    },
  },

  mounted() {
    for(let i =0 ; i < 16; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/int").then(response =>{
        // console.log(response);
        // console.log(response.data.response);
        this.number = response.data.response;
        // console.log(newMail);
        console.log(this.beMail);
        this.arrayNumbers.push(this.number);
        // console.log(this.arrayNumbers);
    });}
  },
});



// TODO  1//Genera 10 mail tramite api e stampale in una lista,2//La lista di email va stampata a schermo nella pagina html.
            
// TODO BONUS (facoltativo):
// TODO 1/Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// TODO 2/Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// TODO 3/Il numero ottenuto appare al centro del quadrato