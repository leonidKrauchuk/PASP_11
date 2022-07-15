
let valuta_usd=document.querySelector('.valuta_usd');
let valuta_eur=document.querySelector('.valuta_eur');
let valuta_rub=document.querySelector('.valuta_rub');
let valuta_uah=document.querySelector('.valuta_uah');
 let valuta_pln=document.querySelector('.valuta_pln');
let summ_val_usd=document.querySelector('.summ_val_usd');
fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')

.then(function (resp){return resp.json()})
.then(function (data){
	valuta_usd.innerHTML=data[5].Cur_Name + ' - '+data[5].Cur_OfficialRate;
	valuta_eur.innerHTML=data[6].Cur_Name + ' - '+data[6].Cur_OfficialRate;
	valuta_rub.innerHTML=data[17].Cur_Scale + '  '+data[17].Cur_Name + ' - '+data[17].Cur_OfficialRate;
	valuta_uah.innerHTML=data[3].Cur_Scale + '  '+data[3].Cur_Name + ' - '+data[3].Cur_OfficialRate;
	valuta_pln.innerHTML=data[7].Cur_Scale + '  '+data[7].Cur_Name + ' - '+data[7].Cur_OfficialRate;

	// console.log(summ_val_usd);
})
.catch(function(){
//catch anny errors
});