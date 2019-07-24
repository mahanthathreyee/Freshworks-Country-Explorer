window.addEventListener('load', () => {
    document.getElementById("Search-Bar")
        .addEventListener("keyup", (event) =>{
            event.preventDefault();
            if(event.keyCode === 13)
                searchCountries();    
    });
});