window.addEventListener('load', () => {
    document.getElementById("Search-Bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            //Uncommenting the below line will make the search to take place only if enter or search buttons is pressed
            //if(event.keyCode === 13)   
                searchInputHandler();    
    });
});

//To handle if search string is empty
function searchInputHandler(){
    let SearchString = document.getElementById("Search-Bar").value;
    if(SearchString === ""){
        removeSearchResults();
        return;
    }
    let response = searchCountries(SearchString, displayResults, handleError);
}

//Function to remove previous search results
function removeSearchResults(){
    const SearchResults = document.getElementById("Search-Results")
    while(SearchResults.firstChild){
        SearchResults.removeChild(SearchResults.firstChild)
    }
}

//Function to handle displaying data to the HTML file
function displayResults(Response){
    removeSearchResults();
    const SearchResults = document.getElementById("Search-Results");
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
        CardLink.setAttribute("href", "./country.html?country="+Response[i]["name"]);
        CardLink.className = "Card-Link";
        CardLink.appendChild(Card)

        SearchResults.appendChild(CardLink);
    }
}

//Function to handle error
function handleError(){
    removeSearchResults();
    const SearchResults = document.getElementById("Search-Results");
    let ErrorMessage = document.createElement("h1");
    ErrorMessage.className = "Error-Message";
    ErrorMessage.innerHTML = "Oops! No results found";
    SearchResults.appendChild(ErrorMessage);
}