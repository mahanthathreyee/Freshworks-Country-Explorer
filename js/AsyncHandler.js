function searchCountries(){
    let SearchString = document.getElementById("Search-Bar").value;
    
    if(SearchString === ""){
        removeSearchResults();
        return;
    }

    const CountryAPI_URL = new Request("https://restcountries.eu/rest/v2/name/" + SearchString);

    fetch(CountryAPI_URL).then((response) => {
        if(response.status === 200)
            return response.json();
       else
            throw new Error("Data could not fetched!!!");
    }).then(response => {
        console.log(response);
        displayResults(response)
    }).catch(error => {
        console.error(error);
        handleError();
    })
}