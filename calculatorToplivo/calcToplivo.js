let kilometrs = document.querySelector(".inp1");
let noPomp = document.querySelector(".inp2");
let pomp = document.querySelector(".inp3");
let out = document.querySelector('.out');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let back = document.querySelector(".back");
let ostatok = document.querySelector(".inpOst");

let vvodKm = "";
let vvodNoPomp = "";
let vvodPomp = "";
let vvodOst = "";

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

function vvod_ost()
{
// ostatok.onclick=function() {
    ostatok.classList.add("active");
    kilometrs.classList.remove("active");
    noPomp.classList.remove("active");
    pomp.classList.remove("active");
    buttons[10].innerHTML=".";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            ostatok.innerHTML += this.innerHTML;
            vvodOst = ostatok.innerHTML;
            out.innerHTML = "";
        }
    }
}

vvod_ost();

ostatok.onclick=function() {
    vvod_ost();
}

kilometrs.onclick = function () {
    ostatok.classList.remove("active");
    kilometrs.classList.add("active");
    noPomp.classList.remove("active");
    pomp.classList.remove("active");
    buttons[10].innerHTML="";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            kilometrs.innerHTML += this.innerHTML;
            vvodKm = kilometrs.innerHTML;
            out.innerHTML = "";
        }
    }
}


noPomp.onclick = function () {
    ostatok.classList.remove("active");
    kilometrs.classList.remove("active");
    noPomp.classList.add("active");
    pomp.classList.remove("active");
    buttons[10].innerHTML="";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            noPomp.innerHTML += this.innerHTML;
            vvodNoPomp = noPomp.innerHTML;
            out.innerHTML = "";
        }
    }
}

pomp.onclick = function () {
    ostatok.classList.remove("active");
    kilometrs.classList.remove("active");
    noPomp.classList.remove("active");
    pomp.classList.add("active");
    buttons[10].innerHTML="";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            pomp.innerHTML += this.innerHTML;
            vvodPomp = pomp.innerHTML;
            out.innerHTML = "";
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
    if (ostatok.classList[3] == "active") {
        vvodOst = String(vvodOst);
        vvodOst = vvodOst.substring(0, vvodOst.length - 1);
        ostatok.innerHTML = vvodOst;
    }
    out.innerHTML = "";
}

// 
let naimAuto = "";
let inputsRad = document.querySelectorAll("input[name='radio']")

for (let i = 0; i < inputsRad.length; i++) {

    let outKm = document.querySelector("#km");
    let outBn = document.querySelector("#bn");
    let outSn = document.querySelector("#sN");
    

    inputsRad[0].checked = true;
    naimAuto = inputsRad[0].id;
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
        naimAuto = inputsRad[i].id;
        rashKm = inputsRad[i].attributes[4].value || 0;
        rashBn = inputsRad[i].attributes[5].value || 0;
        rashSn = inputsRad[i].attributes[6].value || 0;

        rashKm = rashKm.replace(",", ".");
        rashBn = rashBn.replace(",", ".");
        rashSn = rashSn.replace(",", ".");

        outKm.innerHTML = `<i>(${rashKm}л.)</i> километры:`;
        outBn.innerHTML = `<i>(${rashBn}л.)</i> без насоса:`;
        outSn.innerHTML = `<i>(${rashSn}л.)</i> с насосом:`;

        out.innerHTML = "";
    }
}

// расчет и вывод

rezult.onclick = function () {
    os = vvodOst || 0;
    os = parseFloat(os);
    km = vvodKm || 0;
    km = parseInt(km);
    bn = vvodNoPomp || 0;
    bn = parseInt(bn);
    sn = vvodPomp || 0;
    sn = parseInt(sn);

if (os==0 && km == 0 && bn == 0 && sn == 0){
    resultat = (km * rashKm) + (bn * rashBn) + (sn * rashSn);
    out.innerHTML = `<span class="spanO">${naimAuto} (расход)</span> ${resultat.toFixed(3)} <span class="spanO"> л.</span>`;

}


   if(os == 0 && (km != 0 || bn != 0 || sn != 0 )){
        resultat = (km * rashKm) + (bn * rashBn) + (sn * rashSn);
        out.style.color="black";   
        out.innerHTML = `<span class="spanO">${naimAuto} (расход)</span> ${resultat.toFixed(3)} <span class="spanO"> л.</span>`;

    }

    else if(os != 0 ){

        resultat = os- ((km * rashKm) + (bn * rashBn) + (sn * rashSn));
        if(resultat < 0){
            out.style.color="red";
        out.innerHTML = `<span class="spanO">${naimAuto} (остаток)</span> ${resultat.toFixed(3)} 
        <span class="spanO"> л.</span>`;
        }
        else{
            out.style.color="black";
            out.innerHTML = `<span class="spanO">${naimAuto} (остаток)</span> ${resultat.toFixed(3)} <span class="spanO"> л.</span>`;

        }
        
    }
}