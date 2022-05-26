function mudanca_tela_login(){
    var motos= ['url("https://wallpaperaccess.com/full/7202890.jpg")', 'url("https://s1.1zoom.me/big3/143/388615-blackangel.jpg")', 'url("https://images4.alphacoders.com/766/thumb-1920-76626.jpg")', 'url("https://consorciolemes.com.br/wp-content/uploads/2020/03/Honda_motorcycles-HD_Desktop_Wallpaper_2560x1600.jpg")','url("https://s2.best-wallpaper.net/wallpaper/1920x1080/1111/Suzuki-GSXR-600-motorcycle_1920x1080.jpg")','url("https://cutepics.net/wp-content/uploads/2020/11/moto-wallpaper-4k-free-download-for-desktop-background-23-scaled.jpg")']

   var cor_borda = ['#00aeff' , '#dde909', '#009d03','#c500c5','#ff3c00','#00e768']

   var blor = ['#00ccff 3px 3px 40px 9px , #00aeff -10px -2px 20px 2px','#efbd08 3px 3px 40px 9px , #efbd08 -10px -2px 20px 2px','#1d6201 3px 3px 40px 9px , #1d6201 -10px -2px 20px 2px','#ff00ff 3px 3px 40px 9px , #ff00ff -10px -2px 20px 2px','#ff4c15 3px 3px 40px 9px , #ff4c15 -10px -2px 20px 2px','#23ff86 3px 3px 40px 9px , #23ff86 -10px -2px 20px 2px']
   var cor = ['#000ba1','#efbd08','#1d6201','#ff00ff','#ff4c15','#23ff86']

   var computador = Math.floor(Math.random(0) * (6));

  
   document.body.style.backgroundImage = motos[computador];

   dd.style.borderColor = cor_borda[computador];
   dd.style.boxShadow = blor[computador];
   botao.style.borderColor = cor_borda[computador];
   botao.style.boxShadow = blor[computador];
   botao.style.backgroundColor = cor[computador];
   input_email.style.borderColor = cor[computador];
   input_senha.style.borderColor = cor[computador];
   input_email.style.color = cor[computador];
   input_senha.style.color = cor[computador];

}

setInterval(
   function(){
   mudanca_tela_login()  

},3500); 