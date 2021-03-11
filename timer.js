function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();					/*Pobranie dnia z serwera*/
		var miesiac = dzisiaj.getMonth()+1;				/*Pobranie miesiąca z serwera(dodanie jedynki poniewaz jest pobierany w cyfrach od 0-11)*/
		var rok = dzisiaj.getFullYear();				/*Pobranie roku*/
		
		var godzina = dzisiaj.getHours();				/*Pobranie godziny*/
		if (godzina<10) godzina = "0"+godzina;			/*Wyświetlanie zera przez pojedynczymi cyframi*/
		
		var minuta = dzisiaj.getMinutes();				/*Pobranie minuty*/
		if (minuta<10) minuta = "0"+minuta;				/*Wyświetlanie zera przez pojedynczymi cyframi*/
		
		var sekunda = dzisiaj.getSeconds();				/*Pobranie sekundy*/
		if (sekunda<10) sekunda = "0"+sekunda;			/*Wyświetlanie zera przez pojedynczymi cyframi*/
		
		/*komputer bierze cały dokument i wyszukaj w nim używając ID element który ma przypisany identyfikator o nazwie "zegar"*/
		document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}