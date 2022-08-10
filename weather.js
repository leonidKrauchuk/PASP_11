// let valuta_usd=document.querySelector('.valuta_usd');

let weather = document.querySelector(".weather");


fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.8293&lon=26.71678&appid=38d521c818f593344c8cb1d1904bf293&units=metric&lang=ru')
.then(function (resp){return resp.json()})
.then(function (data){
	
	// w_1.innerHTML=data.list;
	//  console.log(data);

	for (let i = 0; i < 8; i ++) {
			let dt = new Date(data.list[i].dt_txt);
			let dtSeg = new Date();
			// console.log(dtSeg.getDay());
			// console.log(dt.getDay());
				if (dtSeg.getDate()==dt.getDate()){
			dt=`сегодня, <br> 
			${dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit'})} `;
			}
			
			else{
				dt = `${dt.toLocaleString('default', {weekday:'short', month: 'short',day: 'numeric' } )} <br>  ${dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit' } )}`;
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
			
		
		
			weather.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div> ${temper}${icon}(${description}${wind})</div>`;
		
			
		};

		let weatherNext = document.querySelector(".weatherNext");
		let dtNext = document.querySelector(".dtNext");


for (let i = 0; i < data.list.length; i ++) {
	let dt = new Date(data.list[i].dt_txt);
	let dtSeg = new Date();

		// if (dtSeg.getDay()+1==dt.getDay()){


			if (dtSeg.getDate()+1==dt.getDate()){



			dtNext.innerHTML=`${dt.toLocaleString('default', {weekday:'long', month: 'long',day: 'numeric'})}`;
	
		dt = dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit' } );
		
	
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
	
		weatherNext.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div> ${temper}${icon}(${description}${wind})</div>`;
	
	
	}

};
let weatherNext_1 = document.querySelector(".weatherNext_1");
let dtNext_1 = document.querySelector(".dtNext_1");


for (let i = 0; i < data.list.length; i ++) {
let dt = new Date(data.list[i].dt_txt);
let dtSeg = new Date();

if (dtSeg.getDate()+2==dt.getDate()){

	dtNext_1.innerHTML=`${dt.toLocaleString('default', {weekday:'long', month: 'long',day: 'numeric'})}`;

dt = dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit' } );


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

weatherNext_1.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div> ${temper}${icon}(${description}${wind})</div>`;


}

};
let weatherNext_2 = document.querySelector(".weatherNext_2");
let dtNext_2 = document.querySelector(".dtNext_2");


for (let i = 0; i < data.list.length; i ++) {
let dt = new Date(data.list[i].dt_txt);
let dtSeg = new Date();

if (dtSeg.getDate()+3==dt.getDate()){


	dtNext_2.innerHTML=`${dt.toLocaleString('default', {weekday:'long', month: 'long',day: 'numeric'})}`;

dt = dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit' } );


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

weatherNext_2.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div> ${temper}${icon}(${description}${wind})</div>`;


}

};
let weatherNext_3 = document.querySelector(".weatherNext_3");
let dtNext_3 = document.querySelector(".dtNext_3");


for (let i = 0; i < data.list.length; i ++) {
let dt = new Date(data.list[i].dt_txt);
let dtSeg = new Date();

if (dtSeg.getDate()+4==dt.getDate()){

	dtNext_3.innerHTML=`${dt.toLocaleString('default', {weekday:'long', month: 'long',day: 'numeric'})}`;

dt = dt.toLocaleString('default', {hour: '2-digit',minute: '2-digit' } );


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

weatherNext_3.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div> ${temper}${icon}(${description}${wind})</div>`;


}

};


})
.catch(function(){
//catch anny errors
});

