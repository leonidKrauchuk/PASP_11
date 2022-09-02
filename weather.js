
function weatherBlizVrem(){

	let weather = document.querySelector(`.weather_0`);
	let mestoDt = document.querySelector(`.dt_0`);

	fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.8293&lon=26.71678&appid=38d521c818f593344c8cb1d1904bf293&units=metric&lang=ru')
	.then(function (resp){return resp.json()})
	.then(function (data){


	for (let i = 0; i < 8; i ++) {
			let dt = new Date(data.list[i].dt_txt);
			let dtSeg = new Date();


let silaWind =data.list[i].wind.speed;
let napr= `<div class = 'strelka'>&#8595</div>`;
let wind = `<div class = 'wind'> ${napr}${silaWind.toFixed(0)} м/c </div>`;

				if (dtSeg.getDate()==dt.getDate()){
					mestoDt.innerHTML=`в ближайшее время`;
					dt=`сегодня, <br>
					<div class='taim'>${dt.toLocaleString('default', {hour: '2-digit'})}
					<sup>00</sup></div> `;
				}
			
				else{
					dt = `${dt.toLocaleString('default', {weekday:'short', month: 'short',day: 'numeric' } )} <br> 
					<div class='taim'>${dt.toLocaleString('default', {hour: '2-digit'})}
					<sup>00</sup></div> `;
				}
		
			let temper = data.list[i].main.temp;
				if (temper>0){
					temper=`<span class ="spanTemper"> + ${temper.toFixed(0)} </span>`;
				}
				else{
					temper=`<span class ="spanTemper">  ${temper.toFixed(0)} </span>`;
				}
			
			let iconId = data.list[i].weather[0].icon;
			let icon = `<img  src=http://openweathermap.org/img/wn/${iconId}@2x.png  alt="icon">`;

			weather.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>${dt } </div>
			${temper}${icon} ${wind}</div>`;
	
		};
		let strelka = document.querySelectorAll('.strelka');

		for (let i = 0; i < strelka.length; i ++) {
			let naprawlenie = data.list[i].wind.deg;
			strelka[i].style.transform =`rotate(${String(naprawlenie)}deg)`;

		};
	})
.catch(function(){
//catch anny errors
});

};
weatherBlizVrem();

function weatherNext(x){
	let weather = document.querySelector(`.weather_${x}`);
	
	
	fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.8293&lon=26.71678&appid=38d521c818f593344c8cb1d1904bf293&units=metric&lang=ru')
	.then(function (resp){return resp.json()})
	.then(function (data){
	
		let mestoDt = document.querySelector(`.dt_${x}`);
		let naprawlenie =[];
		for (let i = 0; i < data.list.length; i ++) {
			let dt = new Date(data.list[i].dt_txt);
			let dtSeg = new Date();
			dtSeg.setDate(dtSeg.getDate()+x);
			let silaWind =data.list[i].wind.speed;
			
			let napr= `<div class = 'strelka_${x}'>&#8595</div>`;
			let wind = `<div class = 'wind'> ${napr}${silaWind.toFixed(0)} м/c </div>`;
			
			if (dtSeg.getDate()==dt.getDate()){
				
				mestoDt.innerHTML=`${dt.toLocaleString('default', {weekday:'long', month: 'long',day: 'numeric'})}`;
	
				dt=`<div class='taim'> ${dt.toLocaleString('default', {hour: '2-digit'})}
				<sup>00</sup></div> `;
			
				let temper = data.list[i].main.temp;
				if (temper>0){
					temper=`<span class ="spanTemper"> + ${temper.toFixed(0)} </span>`;
				}
				else{
					temper=`<span class ="spanTemper">  ${temper.toFixed(0)} </span>`;
				}
				
				let iconId = data.list[i].weather[0].icon;
				let icon = `<img src=http://openweathermap.org/img/wn/${iconId}@2x.png alt="icon">`;
				
				weather.innerHTML += `<div class = 'weatherEl'> <div class = 'weatherElDt'>
				${dt } </div> ${temper}${icon}${wind}</div>`;

				naprawlenie.push( data.list[i].wind.deg);

			};

			};

			let strelka = document.querySelectorAll(`.strelka_${x}`);

			for (let i = 0; i < strelka.length; i ++) {
				
				strelka[i].style.transform =`rotate(${String(naprawlenie[i])}deg)`;
		};


		
	})

	.catch(function(){
	//catch anny errors
	});
	
	};


weatherNext(1);
weatherNext(2);
weatherNext(3);
weatherNext(4);
