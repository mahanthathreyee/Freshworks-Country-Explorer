function searchCountries(){
    let SearchString = document.getElementById("Search-Bar").value;
    const CountryAPI_URL = new Request("https://restcountries.eu/rest/v2/name/" + SearchString);

    fetch(CountryAPI_URL).then((response) => {
        if(response.status === 200)
            return response.json();
       else
            throw new Error("Data could not fetched!!!");
    }).then(response => {
        //Todo dispaly search results
        console.log(response);
        displayResults(response)
    }).catch(error => {
        //Todo Report Error to user
        console.error(error);
    })
}