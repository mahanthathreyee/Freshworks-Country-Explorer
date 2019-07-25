//Fetches the parameter from the URL to get the country details to be presented
function getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//For detecting when the DOCUMENT LOADS
document.addEventListener("DOMContentLoaded", function(event) { 
    let CountrySelected = getParameterByName("country");
    if(CountrySelected == null)
        displayError();
    searchCountries(CountrySelected, displayCountryDetails, displayError, true);
});

//Function to handle displaying data to the HTML file
function displayCountryDetails(Response){
    console.log(Response);
    document.title = Response[0]["name"];

    let CountryFlag = document.getElementById("Country-Flag");
    CountryFlag.setAttribute("src", Response[0]["flag"]);
    
    let CountryName = document.getElementById("Country-Name");
    CountryName.innerHTML = Response[0]["name"];

    const CountryTBody = document.getElementById('Country-TBody');
    for(Key in Response[0]){
        let TableRecord = document.createElement("tr");
        TableRecord.className = "Country-Detail-Row";
        
        let Detail_1 = document.createElement("td");
        Detail_1.innerHTML = capitalizeFirstLetter(Key);
        TableRecord.appendChild(Detail_1);

        let Detail_2 = document.createElement("td");
        if(typeof(Response[0][Key]) === "object")
            Detail_2.innerHTML = JSON.stringify(Response[0][Key]);
        else
            Detail_2.innerHTML = Response[0][Key]
        TableRecord.appendChild(Detail_2);

        CountryTBody.appendChild(TableRecord);
    }
}


//Function to handle error
function displayError(){
    const Container = document.getElementById("Container");
    
    let Heading = document.getElementById("Heading");
    Container.removeChild(Heading);
    
    let CountryDetailsWrapper = document.getElementById("Country-Details-Wrapper");
    Container.removeChild(CountryDetailsWrapper);
    
    let ErrorMsg = document.createElement("h1");
    ErrorMsg.className = "Error-Msg";
    ErrorMsg.innerHTML = "Oops! Something went wrong";
    
    Container.appendChild(ErrorMsg);
}