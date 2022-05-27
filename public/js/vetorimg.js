function mudanca_tela_login(){
    var motos= ['url("https://wallpaperaccess.com/full/7202890.jpg")', 'url("https://s1.1zoom.me/big3/143/388615-blackangel.jpg")', 'url("https://images4.alphacoders.com/766/thumb-1920-76626.jpg")', 'url("https://consorciolemes.com.br/wp-content/uploads/2020/03/Honda_motorcycles-HD_Desktop_Wallpaper_2560x1600.jpg")','url("https://s2.best-wallpaper.net/wallpaper/1920x1080/1111/Suzuki-GSXR-600-motorcycle_1920x1080.jpg")','url("https://cutepics.net/wp-content/uploads/2020/11/moto-wallpaper-4k-free-download-for-desktop-background-23-scaled.jpg")']


   var computador = Math.floor(Math.random(0) * (6));
   document.body.style.backgroundImage = motos[computador];

}

setInterval(
   function(){
   mudanca_tela_login()  

},3500); 