
let valuta_usd=document.querySelector('.valuta_usd');
let valuta_eur=document.querySelector('.valuta_eur');
let valuta_rub=document.querySelector('.valuta_rub');


fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')

.then(function (resp){return resp.json()})
.then(function (data){
	valuta_usd.innerHTML=data[7].Cur_Name + ' - '+data[7].Cur_OfficialRate;
	valuta_eur.innerHTML=data[9].Cur_Name + ' - '+data[9].Cur_OfficialRate;
	valuta_rub.innerHTML=data[21].Cur_Scale + '  '+data[21].Cur_Name + ' - '+data[21].Cur_OfficialRate;


	// console.log(data);
})
.catch(function(){
//catch anny errors
});