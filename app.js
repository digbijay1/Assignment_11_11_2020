function countryInAsia(data){
    let result = data.filter(country => country.region === 'Asia');
    return result; 
  }
  
  
  function getCountriesWithPopLessThan2Lakhs(data){
    return data.filter(country => country.population < 200000);
  }
  
  
  function printResu(data){
    data.forEach(country => {
      console.log(country.name, country.capital, country.flag);
    });
  }
  
  
  function totalWorldPopulation(data){
    return data.reduce((acc, country)=>{
      return country.population + acc;
    },0)
  }
  
  
  function populationOfAsia(data){
     let result = data.filter(country => country.region === 'Asia');
    return result.reduce((currentValue, country) => country.population + currentValue, 0)
    }
  
 
  function findCurrency(data){
    return data.filter(country => country.currencies[0].code === "USD");
  }
  
  function findXml() {
    let req = new XMLHttpRequest(); 
    let countriesData;
    req.open("GET", "https://restcountries.eu/rest/v2/all", true); 
     req.send(); 
  
    req.onload = function () {
      if (req.status != 200) {
        console.log(`Error ${req.status}: ${req.statusText}`);
      } else {
        countriesData = JSON.parse(req.response);
       console.log(countryInAsia(countriesData));
        console.log(getCountriesWithPopLessThan2Lakhs(countriesData));
        printResu(countriesData);
        console.log(totalWorldPopulation(countriesData));
        console.log(populationOfAsia(countriesData));
        console.log(findCurrency(countriesData));
      }
    };
  
    
    req.onerror = function () {
      console.log(" failed", req);
    };
  }
  
  
  function retriveData(){
    const url = 'https://restcountries.eu/rest/v2/all';
  
    fetch(url)
      .then(res => res.json())
      .then(data => {populationCal(data)})
      .catch(err => console.log(err));
  }
  
  findXml();