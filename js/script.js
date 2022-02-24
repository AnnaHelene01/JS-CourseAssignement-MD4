fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
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
	console.error(err);
});

//Hente ut ul elementet mitt fra html.
const out = document.querySelector("ul#listout");

function listData (list) {
    document.querySelector("h1").innerHTML += `(${list.length})`; // For å vise hvor mange det er på listen, 20 stk. 
    out.innerHTML = "";
    for (let item of list){ //loope gjennom for å hente navn på helt og legge det til i listen.
        out.innerHTML += `
        <li>
        <a href="details.html?hero=${item.name}"> 
         ${item.name} 
        </a>
        </li>`
    }
}