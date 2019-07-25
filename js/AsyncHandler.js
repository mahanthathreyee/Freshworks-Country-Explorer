function searchCountries(SearchString, DisplayFunction, ErrorHandlingFunction, FullText = false){
    const CountryAPI_URL = new Request("https://restcountries.eu/rest/v2/name/" + SearchString + (FullText ? "?fullText=true" : ""));
    
    fetch(CountryAPI_URL).then((response) => {
        if(response.status === 200)
            return response.json();
       else
            throw new Error("Data could not fetched!!!");
    }).then(response => {
        DisplayFunction(response);
    }).catch(error => {
        return ErrorHandlingFunction();
    })
}