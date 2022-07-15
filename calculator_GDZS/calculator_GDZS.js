let mm = document.querySelector(".inp1");
let davlIn = document.querySelector(".inp2");
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let itogMm = 0;
let inP = 0;
let back = document.querySelector(".back");



function vvod_mm() {
    mm.classList.add("active");
    davlIn.classList.remove("active");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            mm.innerHTML += this.innerHTML;
            itogMm = mm.innerHTML;
            itogMm = Number(itogMm);

        }
    }

}

vvod_mm();

mm.onclick = function () {
    vvod_mm();
}

davlIn.onclick = function () {
    mm.classList.remove("active");
    davlIn.classList.add("active");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            davlIn.innerHTML += this.innerHTML;
            inP = davlIn.innerHTML;
            inP = Number(inP);


        }
    }
}



let W = 6.8;
let Q = 40;
let rezerv = 50;

let nepredvid = (inP / 2);


rezult.onclick = function () {


    let raschOut = ((itogMm - rezerv) / Q) * W;


    if (itogMm <= 0 || (itogMm <= 0 && inP > 0)) {

        out1.innerHTML = "введи P<span>б</span>";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }


    if (itogMm > 0 && inP <= 0) {

        out1.innerHTML = (raschOut).toFixed(1);
        out1.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время выхода');
        out2.innerHTML = null;
        out3.innerHTML = null;
    }

    if (raschOut <= 0) {
        out1.innerHTML = "заправь аппарат !!!";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }

    if (itogMm > 0 && inP > 0 && raschOut > 0) {
        let raschOut = ((itogMm - rezerv) / Q) * W;
        inP = Number(inP);
        let nepredvid = (inP / 2);
        nepredvid = Number(nepredvid);
        rezerv = Number(rezerv);
        let raschPout = (inP + nepredvid + rezerv);
        raschPout = Number(raschPout);
        let timeWork = ((itogMm - (inP + raschPout)) / Q) * W;
        out1.innerHTML = (raschOut).toFixed(1);
        out1.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время выхода');
        out2.innerHTML = (raschPout).toFixed(1);
        out2.insertAdjacentHTML('beforeEnd', ' <span>атм.</span> давл. выхода');
        out3.innerHTML = (timeWork).toFixed(1);
        out3.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время работы');
    }


    if (itogMm > 400) {

        out1.innerHTML = "баллон может рвануть !!!";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }


}

let clean = document.querySelector(".clean");
let inps = document.querySelectorAll(".inps");
let outs = document.querySelectorAll(".outs");
clean.onclick = function () {
    for (i = 0; i < inps.length; i++) {
        inps[i].innerHTML = "";
    }
    for (i = 0; i < outs.length; i++) {
        outs[i].innerHTML = "";
    }
    itogMm = null;
    inP = null;
}

back.onclick = function () {

    if (mm.classList[3] == "active") {


        itogMm = String(itogMm);


        itogMm = itogMm.substring(0, itogMm.length - 1);
        mm.innerHTML = itogMm;
    }

    if (davlIn.classList[3] == "active") {


        inP = String(inP);
        inP = inP.substring(0, inP.length - 1);
        console.log(inP);
        davlIn.innerHTML = inP;


    }
}

