function mudanca_tela_login(){
    var motos= ['url("./assets/imgs/BETOR8.jpg")', 'url("./assets/imgs/BETOR20.jpg")', 'url("./assets/imgs/BETOR21.jpg")', 'url("./assets/imgs/BETOR22.jpg")','url("./assets/imgs/BETOR23.jpg")','url("./assets/imgs/BETOR24.jpg")']


   var aleatorio = Math.floor(Math.random(0) * (6));
   document.body.style.backgroundImage = motos[aleatorio];

}

setInterval(
   function(){
   mudanca_tela_login()  

},3500); 