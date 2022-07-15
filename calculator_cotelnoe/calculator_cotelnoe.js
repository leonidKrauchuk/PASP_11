let tempAvg = document.querySelector(".inp1");
let numberOfDays = document.querySelector(".inp2");
let set = document.querySelector(".inp3")
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let avgT = 0;
let deys = 0;
let back = document.querySelector(".back");

function vvod_avg_t() {
    tempAvg.classList.add("active");
    numberOfDays.classList.remove("active");
    set.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            tempAvg.innerHTML += this.innerHTML;
            avgT = tempAvg.innerHTML;
        }
    }

}

vvod_avg_t();

tempAvg.onclick = function () {
    vvod_avg_t();
}

numberOfDays.onclick = function () {
    tempAvg.classList.remove("active");
    numberOfDays.classList.add("active");
    set.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            numberOfDays.innerHTML += this.innerHTML;
            deys = numberOfDays.innerHTML;
        }
    }
}

set.onclick = function () {
    set.classList.add("active");
    tempAvg.classList.remove("active");
    numberOfDays.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            numberOfDays.innerHTML += this.innerHTML;
            deys = numberOfDays.innerHTML;
        }
    }
}



let H = 0.00372, Vh = 0.423, Tin = 18, q = 0.57;

rezult.onclick = function () {
    let set = document.querySelector(".inp3").value;
    set = Number(set);
    let set1 = 1 - set;
    avgT = tempAvg.innerHTML;
    deys = numberOfDays.innerHTML;
    avgT = Number(avgT) || 0;
    deys = Number(deys) || 0;
    let rasBr = ((((H * Vh * deys * (Tin - avgT)) / q) * set) / 0.48);
    out1.innerHTML = (rasBr).toFixed(3);
    out1.insertAdjacentHTML('beforeEnd', ' тон. БРИКЕТА');
    let rasDr = ((((H * Vh * deys * (Tin - avgT)) / q) * set1) / 0.266);
    out2.innerHTML = (rasDr).toFixed(3);
    out2.insertAdjacentHTML('beforeEnd', '  М3 дров');
    let tUT = ((H * Vh * deys * (Tin - avgT)) / q);
    out3.innerHTML = (tUT).toFixed(3);
    out3.insertAdjacentHTML('beforeEnd', ' Т.У.Т.');
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
}

back.onclick = function () {
    if (tempAvg.classList[3] == "active") {

        avgT = String(avgT);
        avgT = avgT.substring(0, avgT.length - 1);
        tempAvg.innerHTML = avgT;
    }
    if (numberOfDays.classList[3] == "active") {

        deys = String(deys);
        deys = deys.substring(0, deys.length - 1);
        numberOfDays.innerHTML = deys;
    }
}

