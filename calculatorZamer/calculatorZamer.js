let mm = document.querySelector(".inp1");
let out1 = document.querySelector('.out1');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let itogMm = 0;
let back = document.querySelector(".back");
let radioBs = document.querySelectorAll(".radioBattons")
let mmUral = 0.69;
let mmZil = 0;

mm.classList.add("active");


for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        mm.innerHTML += this.innerHTML;
        itogMm = mm.innerHTML;
        itogMm = Number(itogMm);
        console.log(itogMm);
    }
}

rezult.onclick = function () {
    console.log(radioBs);
    for (i = 0; i < radioBs.length; i++) {
        if (radioBs[0].checked == true) {
            out1.innerHTML = ((itogMm * mmUral)).toFixed(3) || 0;
            out1.insertAdjacentHTML('beforeEnd', '  л.');
        }
        if (radioBs[0].checked == true && itogMm > 436) {
            out1.innerHTML = "ПЕРЕБОР!!!";
        }

        else if (radioBs[1].checked == true) {
            if (itogMm <= 50) {
                mmZil = 0.2;
                console.log(itogMm);
                console.log(mmZil);
                out1.innerHTML = ((itogMm * mmZil)).toFixed(3) || 0;
                out1.insertAdjacentHTML('beforeEnd', '  л.');
            }
            if (itogMm > 50 && itogMm <= 250) {
                mmZil = 0.65;
                out1.innerHTML = ((itogMm * mmZil) - 22.5).toFixed(3) || 0;
                out1.insertAdjacentHTML('beforeEnd', '  л.');
            }
            if (itogMm > 250 && itogMm <= 270) {
                mmZil = 0.5;
                out1.innerHTML = ((itogMm * mmZil) + 15).toFixed(3) || 0;
                out1.insertAdjacentHTML('beforeEnd', '  л.');
            }
            if (itogMm > 270) {
                out1.innerHTML = "ПЕРЕБОР!!!";
            }
        }
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
}