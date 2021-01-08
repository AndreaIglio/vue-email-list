let app = new Vue({
    el: "#root",
    data: {
        mailList: [],
        beMail: "",
    },
    
    methods: {

        addMailList: function (){

            

        }
        
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



// TODO  1//Genera 10 mail tramite api e stampale in una lista,La lista di email va stampata a schermo nella pagina html.
            