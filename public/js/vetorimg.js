function mudanca_tela_login(){
    var personagens= ['url("https://media.istockphoto.com/photos/motorcycle-driving-on-the-asphalt-road-in-rural-landscape-at-sunset-picture-id1140461954?k=20&m=1140461954&s=612x612&w=0&h=zS2tSU7pDT7LQiy3dZiTsVMkCYtcNgc6-PdHGVb6L7g=")', 'url("https://i.pinimg.com/originals/2f/1e/08/2f1e085119dc6d2908f17b52346cb722.jpg")', 'url("https://viagemdemoto.com/images/stories/0112/Viagem_de_moto_conselhos.jpg")', 'url("https://consorciolemes.com.br/wp-content/uploads/2020/03/Honda_motorcycles-HD_Desktop_Wallpaper_2560x1600.jpg")','url("https://cutepics.net/wp-content/uploads/2020/11/moto-wallpaper-4k-free-download-for-desktop-background-23-scaled.jpg")','url("https://www.desktopbackground.org/download/o/2015/01/28/894165_sport-superbike-motocycle-moto-wallpaper-hd-desktop-wallpapers-hd_1920x1200_h.jpg")']

   var cor_borda = ['#00aeff' , '#dde909', '#009d03','#c500c5','#ff3c00','#00e768']

   var blor = ['#00ccff 3px 3px 40px 9px , #00aeff -10px -2px 20px 2px','#efbd08 3px 3px 40px 9px , #efbd08 -10px -2px 20px 2px','#1d6201 3px 3px 40px 9px , #1d6201 -10px -2px 20px 2px','#ff00ff 3px 3px 40px 9px , #ff00ff -10px -2px 20px 2px','#ff4c15 3px 3px 40px 9px , #ff4c15 -10px -2px 20px 2px','#23ff86 3px 3px 40px 9px , #23ff86 -10px -2px 20px 2px']
   var cor = ['#000ba1','#efbd08','#1d6201','#ff00ff','#ff4c15','#23ff86']

   var computador = Math.floor(Math.random(1) * (6));


   document.body.style.backgroundImage = personagens[computador];

   caixaPai.style.borderColor = cor_borda[computador];
   caixaPai.style.boxShadow = blor[computador];
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
},3000);