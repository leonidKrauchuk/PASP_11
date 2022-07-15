function calendarBig(year) {
    for (var m = 0; m <= 11; m++) {

        var D = new Date(year, [m], 1),  //получаем первое число данного месяца

            Dlast = new Date(D.getFullYear(), D.getMonth() + 1, 0).getDate(), //количество дней в месяце

            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(), // получаем последний день на неделе

            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(), // получаем первый день на неделе

            calendar = '<tr>';

        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';

        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }

    //*****************************     отрисовка по сменам     **************************** 

        for (var i = 1; i <= Dlast; i++) {

            let strDay =`${D.getFullYear()}-${D.getMonth()+1}-${i}`;

            strDay = Date.parse(strDay);
            strDay = strDay/86400000;
            strDay = Math.ceil( strDay);

            // console.log(strDay);

            if (strDay % 3 == 0) {
                 calendar += `<td class="smena_2" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i; // вторая смена
             }

             if (strDay % 3 == 1) {
                calendar += `<td class="smena_3" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i; // третяя смена
            }

            if (strDay % 3 == 2) {
                calendar += `<td class="smena_1" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i; // первая смена
            }

             if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                 calendar += '<tr>';
             }
        }

        if (DNlast != 0) {
            for (var i = DNlast; i < 7; i++) calendar += '<td>';

         }

         document.querySelector('#calendarBig table[data-m="' + [m] + '"] tbody').innerHTML = calendar;
         document.querySelector('#calendarBig > thead td:nth-child(2)').innerHTML =  year ;
         document.querySelector('#calendarBig > thead td:nth-child(1)').innerHTML = '&#x25C4 ' + parseFloat(parseFloat(year)-1);
         document.querySelector('#calendarBig > thead td:nth-child(3)').innerHTML = parseFloat(parseFloat(year)+1) + ' &#x25BA' ;
    }


//*****************************    подсветка сегодня     ****************************

let allTd = document.querySelectorAll("td"); // все ячейки
 let date = new Date();
let XXX = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;

for (let i = 0; i < allTd.length; i++) {
    if (allTd[i].id == XXX) {

        allTd[i].classList.add ("segodnya");
        
        // allTd[i].style.border = "solid 1px rgb(0,0,255)";
        // allTd[i].style.boxShadow = "3px 3px 4px ";
    }
}


//*****************************     подсветка текущего месяца     ****************************

let xMes = document.querySelectorAll('table');
let calenYear = document.querySelector('#thead-2').innerHTML;

console.log(date.getFullYear());
console.log(+calenYear);

for (let i = 0; i < xMes.length; i++) {
   
    if (xMes[i].getAttribute('data-m') == date.getMonth() && date.getFullYear() == +calenYear) {
        
      //  xMes[i].tHead.style.boxShadow = "3px 3px 8px grey";
        xMes[i].tHead.style.color = "blue";
        // xMes[i].tHead.style.textShadow = "1px 1px 1px rgb(0,0,0)";
    }else{
       // xMes[i].tHead.style.boxShadow = "1px 1px 5px grey";
        xMes[i].tHead.style.color = "black";
        xMes[i].tHead.style.textShadow = "none";   
    }
}


}

 calendarBig(new Date().getFullYear()); // запуск функции

document.querySelector('#calendarBig > thead td:nth-child(1)').onclick = calendarBigG;
document.querySelector('#calendarBig > thead td:nth-child(3)').onclick = calendarBigG;
function calendarBigG() {calendarBig(this.innerHTML.replace(/[^\d]/gi, ''));}




