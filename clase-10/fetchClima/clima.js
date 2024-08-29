const url = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"
const tabla = document.getElementById("tablaClima")

const llenarTabla = (datosClima)=>{
  tabla.innerHTML = ""
  const tableHead= `
  <thead>
    <tr>
      <th>Icon</th>
      <th>Pressure</th>
      <th>Date</th>
      <th>Max Hum.</th>
      <th>Min Hum.</th>
      <th>Max. Temp.</th>
      <th>Min. Temp.</th>
      <th>Weather</th>
      <th>Wind</th>
      <th>Day</th>
    </tr>
  </thead>`
  tabla.innerHTML = tableHead
  datosClima.forEach(dia => {
    const {ForecastIcon, PSR, forecastDate, forecastMaxrh, forecastMaxtemp, forecastMinrh, forecastMintemp, forecastWeather, forecastWind, week} = dia
    tabla.innerHTML += `
      <td><img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${ForecastIcon}.png" alt="iconoClima" height="40px" width="40px"></td>
      <td>${PSR}</td>
      <td>${forecastDate}</td>
      <td>${forecastMaxrh.value}%</td>
      <td>${forecastMinrh.value}%</td>
      <td>${forecastMaxtemp.value}${forecastMaxtemp.unit}</td>
      <td>${forecastMintemp.value}${forecastMintemp.unit}</td>
      <td>${forecastWeather}</td>
      <td>${forecastWind}</td>
      <td>${week}</td>
    `
  });
}

const generarDatosYTabla = async ()=>{
  const datosJSON = await fetch(url)
  const datos = await datosJSON.json()
  llenarTabla(datos.weatherForecast)
}

generarDatosYTabla()