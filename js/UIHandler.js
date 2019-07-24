window.addEventListener('load', () => {
    document.getElementById("Search-Bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            if(event.keyCode === 13)
                searchCountries();    
    });
});

function displayResults(Response){
    const SearchResults = document.getElementById("Search-Results")
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild)
    }
    for(i=0; i<Response.length; i++){
        let CardLink = document.createElement("a");
        CardLink.setAttribute("href", "#")
        let Card = document.createElement("div");
        Card.className = "Card";

        let CountryFlag = document.createElement("img");
        CountryFlag.setAttribute("src", Response[i]["flag"]);
        CountryFlag.className = "Card-Image";
        Card.appendChild(CountryFlag);
        
        let CountryName = document.createElement("h1");
        CountryName.innerHTML = Response[i]["name"];
        CountryName.className = "Card-Title";
        Card.appendChild(CountryName);
        
        SearchResults.appendChild(Card);
    }
}