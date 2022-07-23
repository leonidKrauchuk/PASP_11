let ostatok = document.querySelector(".inpOst");
let rabota = document.querySelector(".inpRab");
let zapr = document.querySelector(".inpZapr");
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let itogOst = 0;
let itogRab = 0;
let itogZapr = 0;
let back = document.querySelector(".back");

function vvod_ost() {
    ostatok.classList.add("active");
    rabota.classList.remove("active");
    zapr.classList.remove("active");
    buttons[10].innerHTML=".";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            ostatok.innerHTML += this.innerHTML;
            itogOst = ostatok.innerHTML;
            out1.innerHTML = "";
            out2.innerHTML = "";
        }
    }
}

vvod_ost();

ostatok.onclick = function () {
    vvod_ost();
}

rabota.onclick = function () {
    ostatok.classList.remove("active");
    rabota.classList.add("active");
    zapr.classList.remove("active");
    buttons[10].innerHTML="";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            rabota.innerHTML += this.innerHTML;
            itogRab = rabota.innerHTML;
            out1.innerHTML = "";
            out2.innerHTML = "";
        }
    }
}

zapr.onclick = function () {
    ostatok.classList.remove("active");
    rabota.classList.remove("active");
    zapr.classList.add("active");
    buttons[10].innerHTML=".";
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            zapr.innerHTML += this.innerHTML;
            itogZapr = zapr.innerHTML;
            out1.innerHTML = "";
            out2.innerHTML = "";
        }
    }
}

let clean = document.querySelector(".clean");
let inps = document.querySelectorAll(".inps");
clean.onclick = function () {
    for (i = 0; i < inps.length; i++) {
        inps[i].innerHTML = "";
        itogOst = "";
        itogRab = "";
        itogZapr = "";
    }
    out1.innerHTML = "";
    out2.innerHTML = "";
}

// отменить последнее нажатие

back.onclick = function () {
    if (ostatok.classList[3] == "active") {

        itogOst = String(itogOst);
        itogOst = itogOst.substring(0, itogOst.length - 1);
        ostatok.innerHTML = itogOst;
        out1.innerHTML = "";
        out2.innerHTML = "";
    }
    if (rabota.classList[3] == "active") {
        itogRab = String(itogRab);
        itogRab = itogRab.substring(0, itogRab.length - 1);
        rabota.innerHTML = itogRab;
        out1.innerHTML = "";
        out2.innerHTML = "";
    }
    if (zapr.classList[3] == "active") {
        itogZapr = String(itogZapr);
        itogZapr = itogZapr.substring(0, itogZapr.length - 1);
        zapr.innerHTML = itogZapr;
        out1.innerHTML = "";
        out2.innerHTML = "";
    }
}

// 

let inputsRadASI = document.querySelectorAll("input[name='nameASI']")

inputsRadASI[0].checked = true;

let raschRab = inputsRadASI[0].attributes[2].value || 0;
let emkBak = inputsRadASI[0].attributes[4].value || 0;

let naimASI = inputsRadASI[0].attributes[5].value || 0;


for (let i = 0; i < inputsRadASI.length; i++) {

    inputsRadASI[i].onclick = function () {

        raschRab = inputsRadASI[i].attributes[2].value || 0;
        emkBak = inputsRadASI[i].attributes[4].value || 0;
        naimASI = inputsRadASI[i].attributes[5].value || 0;
        out1.innerHTML = "";
        out2.innerHTML = "";
    }
}

// расчет и вывод

let resultat = 0;

rezult.onclick = function () {


    itogOst = parseFloat(itogOst) || 0;
    itogRab = parseInt(itogRab) || 0;
    itogZapr = parseFloat(itogZapr) || 0;
    raschRab = parseFloat(raschRab) || 0;
    emkBak = parseFloat(emkBak) || 0;
    

    if (itogOst == 0  && itogRab!=0 && itogZapr ==0) {
        resultat = itogRab * raschRab;
        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (расход) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;    
    }
    
    else if (itogOst !=0 && itogRab!=0 && itogZapr == 0) {
        resultat = (itogOst -( itogRab * raschRab)) + itogZapr;
       
            if(resultat<0){
            out1.style.color="red";
      
            out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
            <span class="spanO"> л.</span>`;
            }
            if(resultat>0&&resultat > emkBak){
            out1.style.color="red";
          
            out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
            <span class="spanO"> л.</span>`;
            }   
            if(resultat > 0 && resultat < emkBak){
            out1.style.color="black";
      
            out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
            <span class="spanO"> л.</span>`;
    
            }
            out2.style.color="black";
            ras = itogRab * raschRab ;
            out2.innerHTML = `<span class="spanO" >${naimASI} (расход) </span>${ras.toFixed(3)}
            <span class="spanO"> л.</span>`;
        

    
    }

    else if (itogOst !=0 && itogRab == 0 && itogZapr == 0) {
        resultat = itogOst;
       
        if (resultat>emkBak){
            console.log(3.1);
            out1.style.color="red";
            out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
            <span class="spanO"> л.</span>`;
    
        }

        else{
        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
        }
        

    }



    else if (itogOst ==0 && itogZapr != 0 && itogRab!=0) {
        resultat = (itogOst -( itogRab * raschRab)) + itogZapr;
       
        if (resultat>emkBak || resultat<0){
        out1.style.color="red";
        out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
       }
       else{
        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;

       }
        out2.style.color="black";
        ras = itogRab * raschRab;
        out2.innerHTML = `<span class="spanO" >${naimASI} (расход) </span>${ras.toFixed(3)}
        <span class="spanO"> л.</span>`;
        
       
    }

    else if (itogOst !=0 && itogRab == 0 && itogZapr != 0) {
        resultat = itogOst + itogZapr;
       if (resultat>emkBak){
        out1.style.color="red";
        out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
    }
      else{
        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
      }       
    }

    else if (itogOst ==0 && itogRab == 0 && itogZapr != 0) {
        resultat = itogZapr;
       if (resultat>emkBak){
        out1.style.color="red";
        out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
       }
       
        else{
            out1.style.color="black";
            out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
            <span class="spanO"> л.</span>`;
        }
        
    }

    if (itogOst == 0  && itogRab==0 && itogZapr ==0) {
        resultat = 0;

        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (расход) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;    
       
    }
    else if (itogOst !=0 && itogRab != 0 && itogZapr != 0) {
        resultat = (itogOst -( itogRab * raschRab)) + itogZapr;
       if (resultat>emkBak){
        out1.style.color="red";
        out1.innerHTML = `<span class="spanO" >${naimASI} (бак ${emkBak} л.) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
    }
      else{
        out1.style.color="black";
        out1.innerHTML = `<span class="spanO" >${naimASI} (остаток) </span>${resultat.toFixed(3)}
        <span class="spanO"> л.</span>`;
      } 
      out2.style.color="black";
      ras = itogRab * raschRab;
      out2.innerHTML = `<span class="spanO" >${naimASI} (расход) </span>${ras.toFixed(3)}
      <span class="spanO"> л.</span>`;     
    }

}