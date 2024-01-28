const coutriesContainerEl = document.querySelector(".countrues-container");
const COUNTRIES_URL = "https://restcountries.com/v3.1/name/portugal";

function fetchCountires() {
  fetch(COUNTRIES_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountriesList(coutriesContainerEl, data);
    });
}

function renderCountriesList(containerEl, countriesData) {
  let countriesHTML = "";

  for (let country of countriesData) {
    countriesHTML += `
        <div class="country-card">
          <h3>${country.name}</h3>
          
          <h4>${country.population}</h4>
          <img src="" alt="" />
          <p>${country.capital}</p>
        </div>`;
  }

  containerEl.innerHTML = countriesHTML;
}
fetchCountires();
