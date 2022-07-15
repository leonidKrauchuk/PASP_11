
let avtoName = document.querySelector("input[name=avto]").value;
avtoName = avtoName.replace(/\s/g, '');
let save = document.querySelector("input[value=Добавить]");
let close = document.querySelector("input[value=Закрыть]");
let outAllAuto = document.querySelector('.outAllAuto');

// *************************************************
// проверка наличия авто в локалсторадж
let provNalichiya = "";

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let ddd = localStorage.getItem(key);
    ddd = JSON.parse(ddd);
    provNalichiya = Object.keys(ddd)[0];
}

// *****************************
if (provNalichiya !== "avtoName") {

    let newAuto = document.createElement('div');
    newAuto.className = "outAllAuto";

    avtoName = "УРАЛ(5557)"

    let km = 0.41
    let sN = 0.250
    let bn = 0.15
    avto =
    {
        'avtoName': avtoName,
        'km': km,
        'sN': sN,
        'bn': bn
    }
    localStorage.setItem(avtoName, JSON.stringify(avto));

    let vozvrAvto = localStorage.getItem(avtoName);
    vozvrAvto = JSON.parse(vozvrAvto);
    newAuto.name = vozvrAvto.avtoName;
    newAuto.innerHTML = `марка авто - <strong>${vozvrAvto.avtoName}</strong>.<br>
   расход на 1 км.- <strong>${vozvrAvto.km || 0}</strong> л.<br>
   1 минута с насосом - <strong>${vozvrAvto.sN || 0}</strong> л.<br>
   1 минута без насоса - <strong>${vozvrAvto.bn || 0}</strong> л.<br> 
   <input type="button" value="удалить" name=${vozvrAvto.avtoName}>  <br>
   <hr>`;







    let newAuto1 = document.createElement('div');
    newAuto1.className = "outAllAuto";

    avtoName = "АЦ40(131)137"

    let km1 = 0.51
    let sN1 = 0.33
    let bn1 = 0.15
    avto =
    {
        'avtoName': avtoName,
        'km': km1,
        'sN': sN1,
        'bn': bn1
    }
    localStorage.setItem(avtoName, JSON.stringify(avto));

    let vozvrAvto1 = localStorage.getItem(avtoName);
    vozvrAvto1 = JSON.parse(vozvrAvto1);
    newAuto1.name = vozvrAvto1.avtoName;
    newAuto1.innerHTML = `марка авто - <strong>${vozvrAvto1.avtoName}</strong>.<br>
  расход на 1 км.- <strong>${vozvrAvto1.km1 || 0}</strong> л.<br>
  1 минута с насосом - <strong>${vozvrAvto1.sN1 || 0}</strong> л.<br>
  1 минута без насоса - <strong>${vozvrAvto1.bn1 || 0}</strong> л.<br> 
  <input type="button" value="удалить" name=${vozvrAvto1.avtoName}>  <br>
  <hr>`;


    window.location.reload();
}


// добавление авто в локал сторадж  и отображение добавленого 
save.onclick = function () {
    avtoName = document.querySelector("input[name=avto]").value;
    avtoName = avtoName.replace(/\s/g, '');
    // проверка на пустую строку

    if (avtoName != null && typeof avtoName !== "undefined") {
        avtoName = avtoName.trim();
    }
    if (!avtoName) {
        avtoName = "";
    }
    let km = document.querySelector("input[name=km]").value;
    let sN = document.querySelector("input[name=sN]").value;
    let bn = document.querySelector("input[name=bn]").value;

    let newAuto = document.createElement('div');
    newAuto.className = "outAllAuto";

    avto =
    {
        'avtoName': avtoName,
        'km': km,
        'sN': sN,
        'bn': bn
    }
    localStorage.setItem(avtoName, JSON.stringify(avto));

    let vozvrAvto = localStorage.getItem(avtoName);
    vozvrAvto = JSON.parse(vozvrAvto);
    newAuto.name = vozvrAvto.avtoName;
    newAuto.innerHTML = `марка авто - <strong>${vozvrAvto.avtoName}</strong>.<br>
       расход на 1 км.- <strong>${vozvrAvto.km || 0}</strong> л.<br>
       1 минута с насосом - <strong>${vozvrAvto.sN || 0}</strong> л.<br>
       1 минута без насоса - <strong>${vozvrAvto.bn || 0}</strong> л.<br> 
       <input type="button" value="удалить" name=${vozvrAvto.avtoName}>  <br>
       <hr>`;

    // проверка повторений ввода

    let prov = document.querySelectorAll('.outAllAuto');

    for (let i = 0; i < prov.length; i++) {

        if (prov[i].name == avtoName) {
            // break;
            console.log(avtoName)
            newAuto.innerHTML = null;
            if (avtoName == "") {
                localStorage.removeItem("");
            }
        }
        if (prov[i].name !== avtoName) {
            outAllAuto.prepend(newAuto);

        }
    }

    // удаление недавно добавленых

    let back = document.querySelectorAll("input[value=удалить]");

    for (let i = 0; i < back.length; i++) {
        back[i].onclick = function () {

            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key == this.name) {
                    localStorage.removeItem(this.name);
                }

                let dellDiv = document.querySelectorAll("div[class=outAllAuto]");

                for (let i = 0; i < dellDiv.length; i++) {
                    let yyy = dellDiv[i];
                    if (yyy.name == this.name) {
                        dellDiv[i].innerHTML = null;
                        document.querySelector("input[name=avto]").value = "";
                    }
                }
            }
        }
    }
}

// вывод сохраненных авто

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let y = localStorage.getItem(key);
    y = JSON.parse(y);

    let newAuto1 = document.createElement('div');
    newAuto1.className = "outAllAuto";
    newAuto1.name = y.avtoName;

    newAuto1.innerHTML += `марка авто - <strong>${y.avtoName}.</strong><br>
расход на 1 км.- <strong>${y.km || 0}</strong> л.<br>
1 минута с насосом - <strong>${y.sN || 0}</strong> л.<br>
1 минута без насоса - <strong>${y.bn || 0}</strong> л.<br> 
<input type="button" value="удалить" name=${y.avtoName}>  <br> <hr>`;

    outAllAuto.append(newAuto1);

}

// удаление авто

let dell = document.querySelectorAll("input[value=удалить]");
let dellDiv = document.querySelectorAll("div[class=outAllAuto]");
vozvrAvto = localStorage.getItem(avtoName);
vozvrAvto = JSON.parse(vozvrAvto);
for (let i = 0; i < dell.length; i++) {
    dell[i].onclick = function () {
        for (let i = 0; i < localStorage.length; i++) {
            let z = localStorage.key(i);
            if (z == this.name) {
                localStorage.removeItem(this.name);
            }
            for (let i = 0; i < dellDiv.length; i++) {
                let xxx = dellDiv[i];

                if (xxx.name == this.name) {
                    dellDiv[i].innerHTML = "";
                }
            }
        }
    }
}

// закрытие настроек

let conteiner = document.querySelector(".settingConteiner");

close.onclick = function () {



    conteiner.style.display = "none";
    window.location.reload();
}
