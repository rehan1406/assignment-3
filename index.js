const active = document.querySelector("#active");
const newdata = document.querySelector("#new");
const recovered = document.querySelector("#recovered");
const totalcases = document.querySelector("#total-cases");
const totaldeaths = document.querySelector("#total-death");
const totaltests = document.querySelector("#total-test");

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5b0937b9b6msh95fa77df778b548p14d365jsnca9d12330290",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const dataResponse = data.response[0];

    console.log(dataResponse);
    active.innerText = dataResponse.cases.active;
    newdata.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recovered.innerText = dataResponse.cases.recovered;
    totalcases.innerText = dataResponse.cases.total;
    totaldeaths.innerText = dataResponse.deaths.total;
    totaltests.innerText = dataResponse.tests.total;
  }
});
