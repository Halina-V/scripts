function sayHi(user = "Dear user") {
	console.log("Hi, " + user + "!");
}
var countryName
var capitalName


function addInfoCountry(){
	countryName = prompt("Введите название страны");
	capitalName = prompt("Введите название столицы");
	addСountry(countryName, capitalName);
}


function getInfoCountry(){
	countryName = prompt("Введите название страны");
	if(countryName in countries){
	return alert(getcountryInfo(countryName));
} else {
	return console.log(getcountryInfo(countryName));
}
}


function showlistСountries(){
	console.log(listСountries());
}

function RemoveInfoCountry(){
	countryName = prompt("Введите название страны");
	if(countryName in countries){
	deleteСountry(countryName);
	console.log(countries);
} else return alert('нет ' + countryName + ' в списке стран' + '!');
}