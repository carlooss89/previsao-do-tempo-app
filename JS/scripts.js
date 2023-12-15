const key = "d6a38079bafb5c5e7493330aa867117d";

// trazer os dados para a tela
function bringData(dados) {
  console.log(dados);

  document.querySelector(".current-city").innerHTML = " Tempo em " + dados.name;

  document.querySelector(".temperature").innerHTML =
    Math.floor(dados.main.temp) + "°C";

  document.querySelector(".prediction-text").innerHTML =
    dados.weather[0].description;

  document.querySelector(".moisture").innerHTML = dados.main.humidity + "%";

  document.querySelector(
    ".img-nuvem"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Busca dos dados da cidade
async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  bringData(dados);
}

function IClickedTheButton() {
  const cidade = document.querySelector(".city-name").value;

  buscarCidade(cidade);
}
