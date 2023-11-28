const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const relogio = setInterval(() => {

    let dateToday = new Date();
    let hr = dateToday.getHours();

    horas.textContent = hr



    let minutes = new Date();
    let mnt = minutes.getMinutes();

    minutos.textContent = mnt


    let seconds = new Date();
    let sgnds = seconds.getSeconds();

    segundos.textContent = sgnds

    if ( sgnds < 10) {

        sgnds = "0" + sgnds
        
    }

    if (mnt < 10) {

        mnt = "0" + mnt
        
    }
});