// let valuta_usd=document.querySelector('.valuta_usd');

let weather = document.querySelector(".weather");


fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.8293&lon=26.71678&appid=38d521c818f593344c8cb1d1904bf293&units=metric&lang=ru')
.then(function (resp){return resp.json()})
.then(function (data){
	
	// w_1.innerHTML=data.list;
	//  console.log(data);
for (let i = 0; i < data.list.length; i ++) {
	let dt = new Date(data.list[i].dt_txt);
	let dtSeg = new Date();
	// console.log(dtSeg.getDay());
	// console.log(dt.getDay());
		if (dtSeg.getDay()==dt.getDay()){
	dt=`сегодня, ${dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit'})} `;
	}
	//  if  (dtSeg.getDay()==(dt.getDay()+1)){
	// 	dt=`завтра ${dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit'})} `;
	// 	}
	else{
		dt = dt.toLocaleString('default', { month: 'short',day: 'numeric',hour: '2-digit',minute: '2-digit'});
	}

	
	let temper = data.list[i].main.temp;
	if (temper>0){
		temper=`<span class ="spanTemper"> + ${temper.toFixed(0)} &#176 </span>`;
	}
	else{
		temper=`<span class ="spanTemper">  ${temper.toFixed(0)} &#176 </span>`;
	}
	
	let description = data.list[i].weather[0].description;
	
	let iconId = data.list[i].weather[0].icon;
	let icon = `<img src=http://openweathermap.org/img/wn/${iconId}@2x.png alt="icon">`;
	let wind =`, ветер ${data.list[i].wind.speed} м/c, порывы до ${data.list[i].wind.gust} м/c`
	


	weather.innerHTML += `<div class = 'weatherEl'> ${dt}  ${temper} ${icon} (${description}${wind})</div>`;

	
};


})
.catch(function(){
//catch anny errors
});

