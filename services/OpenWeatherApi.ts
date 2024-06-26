import axios from "axios";

const api = {
  key: "a498639e9ed6c24d4a27b374af1cd0ad",
  baseUrl: "http://api.openweathermap.org/data/2.5/",
};

export async function fetchWeatherData(cidade) {
  try {
    const response = await axios.get(`${api.baseUrl}weather`, {
      params: {
        q: cidade,
        units: "metric",
        appid: api.key,
        lang: "pt_br",
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.status === 404
        ? "Cidade não encontrada."
        : "Erro ao buscar dados.";
    throw new Error(`${errorMessage} (Código: ${error.response?.status})`);
  }
}
export async function buscarPorCord(lat, lon) {
  try {
    const response = await axios.get(`${api.baseUrl}weather?lat=${lat}&lon=${lon}&appid=${api.key}`, {
      params: {
        units: "metric",
        lang: "pt_br",
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.status === 404
        ? "Cidade não encontrada."
        : "Erro ao buscar dados.";
    throw new Error(`${errorMessage} (Código: ${error.response?.status})`);
  }
}