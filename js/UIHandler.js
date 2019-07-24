window.addEventListener('load', () => {
    document.getElementById("Search-Bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            if(event.keyCode === 13)
                searchCountries();    
    });
});

function removeSearchResults(){
    const SearchResults = document.getElementById("Search-Results")
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild)
    }
}

function displayResults(Response){
    removeSearchResults();
    const SearchResults = document.getElementById("Search-Results")
    for(i=0; i<Response.length; i++){
        let Card = document.createElement("div");
        Card.className = "Card-Wrapper";
        
        let CountryFlag = document.createElement("img");
        CountryFlag.setAttribute("src", Response[i]["flag"]);
        CountryFlag.className = "Card-Image";
        Card.appendChild(CountryFlag);
        
        let CountryName = document.createElement("p");
        CountryName.innerHTML = Response[i]["name"];
        CountryName.className = "Card-Title";
        Card.appendChild(CountryName);
        
        let CardLink = document.createElement("a");
        CardLink.setAttribute("href", "#");
        CardLink.className = "Card-Link";
        CardLink.appendChild(Card)

        SearchResults.appendChild(CardLink);
    }
}

function handleError(){
    removeSearchResults();
}