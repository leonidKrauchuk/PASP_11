let kilometrs = document.querySelector(".inp1");
let noPomp = document.querySelector(".inp2");
let pomp = document.querySelector(".inp3");
let out = document.querySelector('.out');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let back = document.querySelector(".back");

let vvodKm = "";
let vvodNoPomp = "";
let vvodPomp = "";

// показать настройки

let setting_but = document.querySelector("#setting");
setting_but.onclick = function () {
    conteiner.style.display = "grid";
}

// получить радиобатоны и вывести

let radioBattons = document.querySelector(".radioBatton");

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let y = localStorage.getItem(key);
    y = JSON.parse(y);
    radioBattons.insertAdjacentHTML("afterbegin", `<label><input type="radio"class = "radio" 
    name = "radio" id = ${y.avtoName || 0} dataKm=${y.km || 0} dataBn=${y.bn || 0}
    dataSn=${y.sN || 0}>${y.avtoName}</label><br>`)
}

// ввод данных

function vvod_km() {
    kilometrs.classList.add("active");
    noPomp.classList.remove("active");
    pomp.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            kilometrs.innerHTML += this.innerHTML;
            vvodKm = kilometrs.innerHTML;
        }
    }
}

vvod_km();

kilometrs.onclick = function () {
    vvod_km();
}

noPomp.onclick = function () {
    kilometrs.classList.remove("active");
    noPomp.classList.add("active");
    pomp.classList.remove("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            noPomp.innerHTML += this.innerHTML;
            vvodNoPomp = noPomp.innerHTML;
        }
    }
}

pomp.onclick = function () {
    kilometrs.classList.remove("active");
    noPomp.classList.remove("active");
    pomp.classList.add("active");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            pomp.innerHTML += this.innerHTML;
            vvodPomp = pomp.innerHTML;
        }
    }
}

// удаление вводов

let clean = document.querySelector(".clean");
let inps = document.querySelectorAll(".inps");
clean.onclick = function () {
    for (i = 0; i < inps.length; i++) {
        inps[i].innerHTML = "";
        vvodPomp = "";
        vvodNoPomp = "";
        vvodKm = "0";
    }
    out.innerHTML = "";
}

// отменить последнее нажатие

back.onclick = function () {
    if (kilometrs.classList[3] == "active") {

        vvodKm = String(vvodKm);
        vvodKm = vvodKm.substring(0, vvodKm.length - 1);
        kilometrs.innerHTML = vvodKm;
    }
    if (noPomp.classList[3] == "active") {
        vvodNoPomp = String(vvodNoPomp);
        vvodNoPomp = vvodNoPomp.substring(0, vvodNoPomp.length - 1);
        noPomp.innerHTML = vvodNoPomp;
    }
    if (pomp.classList[3] == "active") {
        vvodPomp = String(vvodPomp);
        vvodPomp = vvodPomp.substring(0, vvodPomp.length - 1);
        pomp.innerHTML = vvodPomp;
    }
}

// 

let inputsRad = document.querySelectorAll("input[name='radio']")

for (let i = 0; i < inputsRad.length; i++) {

    let outKm = document.querySelector("#km");
    let outBn = document.querySelector("#bn");
    let outSn = document.querySelector("#sN");

    inputsRad[0].checked = true;

    rashKm = inputsRad[0].attributes[4].value || 0;
    rashBn = inputsRad[0].attributes[5].value || 0;
    rashSn = inputsRad[0].attributes[6].value || 0;

    rashKm = rashKm.replace(",", ".");
    rashBn = rashBn.replace(",", ".");
    rashSn = rashSn.replace(",", ".");

    outKm.innerHTML = `<i>(${rashKm}л.)</i> километры:`;
    outBn.innerHTML = `<i>(${rashBn}л.)</i> без насоса:`;
    outSn.innerHTML = `<i>(${rashSn}л.)</i> с насосом:`;

    inputsRad[i].onclick = function () {

        rashKm = inputsRad[i].attributes[4].value || 0;
        rashBn = inputsRad[i].attributes[5].value || 0;
        rashSn = inputsRad[i].attributes[6].value || 0;

        rashKm = rashKm.replace(",", ".");
        rashBn = rashBn.replace(",", ".");
        rashSn = rashSn.replace(",", ".");

        outKm.innerHTML = `<i>(${rashKm}л.)</i> километры:`;
        outBn.innerHTML = `<i>(${rashBn}л.)</i> без насоса:`;
        outSn.innerHTML = `<i>(${rashSn}л.)</i> с насосом:`;
    }
}

// расчет и вывод

rezult.onclick = function () {

    km = vvodKm || 0;
    km = parseInt(km);
    bn = vvodNoPomp || 0;
    bn = parseInt(bn);
    sn = vvodPomp || 0;
    sn = parseInt(sn);
    resultat = (km * rashKm) + (bn * rashBn) + (sn * rashSn);
    out.innerHTML = resultat.toFixed(3);
    resultat = out;
    resultat.insertAdjacentHTML('beforeEnd', ' л.');
}
