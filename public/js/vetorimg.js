function mudanca_tela_login(){
    var motos= ['url("./assets/imgs/BETOR8.jpg")', 'url("./assets/imgs/BETOR2.jpg")', 'url("./assets/imgs/BETOR3.jpg")', 'url("./assets/imgs/BETOR7.jpg")','url("./assets/imgs/BETOR5.jpg")','url("./assets/imgs/BETOR6.jpg")']


   var computador = Math.floor(Math.random(0) * (6));
   document.body.style.backgroundImage = motos[computador];

}

setInterval(
   function(){
   mudanca_tela_login()  

},3500); 