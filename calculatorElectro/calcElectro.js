let predPokaz = document.querySelector(".inp1");
let mes = document.querySelector(".inp2");
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let back = document.querySelector(".back");

let vvodPred = "";
let vvodMes = mes;

function vvod_pred() {
    predPokaz.classList.add("active");
    mes.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            predPokaz.innerHTML += this.innerHTML;
            vvodPred = predPokaz.innerHTML;
        }
    }
}

vvod_pred();

predPokaz.onclick = function () {
    vvod_pred()
}


mes.onclick = function () {
    predPokaz.classList.remove("active");
    mes.classList.add("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            vvodMes = mes.value;
        }
    }
}

let clean = document.querySelector(".clean");
clean.onclick = function () {
    predPokaz.innerHTML = "";
    out1.innerHTML = "";
}

back.onclick = function () {
    if (predPokaz.classList[3] == "active") {
        vvodPred = String(vvodPred);
        vvodPred = vvodPred.substring(0, vvodPred.length - 1);
        predPokaz.innerHTML = vvodPred;
    }
}

rezult.onclick = function () {
    pred = vvodPred || 0;
    pred = parseFloat(pred);
    normMes = vvodMes.value;
    pokaz = ((+normMes + pred) - ((+normMes / 100) * 5));
    out1.innerHTML = pokaz;
    pokaz = out1;
    pokaz.insertAdjacentHTML('beforeEnd', ' последующее');
    raznica = (normMes) - (normMes / 100) * 5;
    out2.innerHTML = raznica;
    raznica = out2;
    raznica.insertAdjacentHTML('beforeEnd', ' разн. с уч. экон.5%');
}