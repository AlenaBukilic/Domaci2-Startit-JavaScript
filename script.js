function suma() {

	var n = prompt("Unesi broj i sracunaj:");

	if (n < 0 || isNaN(n)) {
		return document.getElementById("one").innerHTML = "Mora biti pozitivan broj";
	}
	else {

		for (var j = 0; j <= n; j++){
			 x = n*(n+1)/2;
		}
		return document.getElementById("one").innerHTML = "Rezultat je " + x;
	}
}

function faktorijel() {

	var m = prompt("Unesi broj i sracunaj:");

	if (m <= 0 || isNaN(m)) {
		return document.getElementById("two").innerHTML = "Mora biti prirodan broj";
	}

	else {

		for	(var e = m - 1; e >= 1; e--) {
			m = m*e;
		}
		return document.getElementById("two").innerHTML = "Rezultat je " + m;
	} 
}

function bilans() {

	var stanje = prompt("Koliko imas para:");
	var cena = prompt("Koliko kosta tvoj zeljeni predmet:");

	if(stanje <= 0 || cena <= 0) {
		return document.getElementById("tree").innerHTML = "Nema pas za sta da te ujede.";
	}
	else if (isNaN(stanje) || isNaN(cena)) {
		return document.getElementById("tree").innerHTML = "Ne pravi se pametan i unesi iznos.";	
	}
	else {

		var komad = Math.round(stanje / cena);
		
		return document.getElementById("tree").innerHTML = "Mozes da kupis " + komad + " komada.";
	}

}

function zbirCelih() {

	var n = Number(prompt("Zelim da saberem sve od:"));
	var k = Number(prompt("Do:"));

	var zbir = 0;

	if (n < k) {

		for ( var i = n; i <= k; i++){
			zbir+=i;
		}
		return document.getElementById("four").innerHTML = "Rezultat je " + zbir;
	}
}