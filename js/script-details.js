//Hente query string
const queryString = document.location.search;
//Lage et objekt som lar oss akksessere alle query string parametere
const params = new URLSearchParams(queryString);
//Hente id parameteret fra query string
const hero = params.get("hero");
console.log(hero);

fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${hero}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "2f19cacf2amsh9d2616f9e51886dp129dc7jsn97a2d1255b01"
	}
})

.then(response => response.json())
.then (myData => {
    console.log(myData);
    listData(myData);
})
.catch(err => {
    status.innerHTML = "Something's wrong!"
	console.error(err);
});

//Hente ut html elementer
const status = document.querySelector("p#out");
const out = document.querySelector("div#listHero");


function listData(heroes) {
    //console.log(heroes); 
    //Lager html content med hero properties til DETAILS siden.
    document.title = heroes.name;
    let newDiv = `
    <h1>${heroes.name}</h1>
    <img src="${heroes.images.sm}" alt="${heroes.name}">
    <p> ID: ${heroes.id} </p>
    <p> Appearance: ${heroes.appearance.gender} </p>
    <p> Full name: ${heroes.biography.fullName}</p>
    <button type="button"> <a href="index.html"> Go Back </a> </>
    `;
    out.innerHTML = newDiv;
    status.innerHTML = "";
}
