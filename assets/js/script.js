let app = new Vue({
    el: "#root",
    data: {
        mailList: [],
        beMail: "",
        number: "",
        arrayNumbers: [],
        color: "",
    },
    
    methods: {

     
      
    },

    mounted() {
        
        for(let i =0 ; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{
            // console.log(response);
            // console.log(response.data.response);
            let newMail = response.data.response;
            // console.log(newMail);
            this.beMail = newMail;
            console.log(this.beMail);
            this.mailList.push(this.beMail);
            console.log(this.mailList);
        });}
    
       
        
    },
})



// TODO  1//Genera 10 mail tramite api e stampale in una lista,2//La lista di email va stampata a schermo nella pagina html.
            
// TODO BONUS (facoltativo):
// TODO 1/Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// TODO 2/Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// TODO 3/Il numero ottenuto appare al centro del quadrato