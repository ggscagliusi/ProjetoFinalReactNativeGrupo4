import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  Modal,
  PermissionsAndroid,
  Platform
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { useState } from "react";
import { Card } from "../../components/Card";
import { CardCeu } from "../../components/CardCeu";
import { CardTemp } from "../../components/CardTemp";
import { Botao } from "../../components/Botao";
import { fetchWeatherData } from "../../services/OpenWeatherApi";
import Local from 'react-native-geolocation-service';

export default function PrevisaoTempo() {
  const [loading, setloading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [input, setInput] = useState("");
  const [erro, setErro] = useState("");
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  async function fetchDataHandler() {
    console.log("acionado");
    setloading(true);
    setShowData(false);
    setErro(null);
    try {
      const weatherData = await fetchWeatherData(input);
      console.log(weatherData);
      setData(weatherData);
      setShowData(true);
    } catch (e) {
      setErro(e.message);
    } finally {
      setloading(false);
      setInput("");
    }
  }
  async function fetchDataHandlerCord() {
    console.log("acionado");
    setloading(true);
    setShowData(false);
    try {
      const weatherDataCord = await buscarPorCord(latitude, longitude);
      console.log(weatherDataCord);
      setData(weatherDataCord);
      setShowData(true);
    } catch (e) {
      alert(e.message);
    } finally {
      setloading(false);
      setInput("");
    }
  }
  async function obterLoc() {
    if (Platform.OS === 'android') {
      try {
        const permLoc = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Localização",
            message: "Este aplicativo precisa acessar sua localização",
            buttonNeutral: "Perguntar Depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
        if (permLoc === PermissionsAndroid.RESULTS.GRANTED) {
          Local.getCurrentPosition(
            (pos) => {
              setLatitude(pos.coords.latitude);
              setLongitude(pos.coords.longitude);
              fetchDataHandlerCord();
            },
            (erro) => {
              alert('Erro: ' + erro);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        } else {
          console.warn("Permissão de localização negada");
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      Local.getCurrentPosition(
        (pos) => {
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
          fetchDataHandlerCord();
        },
        (erro) => {
          alert('Erro: ' + erro);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.formTitle}>Previsão do Tempo</Text> */}
      <View>
        <TextInput
          style={styles.formInput}
          placeholder="Digite uma Cidade..."
          value={input}
          onChangeText={(e) => setInput(e)}
        />
        <Botao
          style={[
            styles.formButton,
            input.trim() === "" && styles.formButtonDisabled,
          ]}
          onPress={fetchDataHandler}
          disabled={input.trim() === ""}
          textStyle={styles.textButton}
          text={"Buscar"}
        />
      </View>
      {loading && ( // bloco do Activity Indicator
        <View>
          <ActivityIndicator size={"large"} color={"#15719f"} />
        </View>
      )}

      {erro && (
        <View style={styles.SubContainer}>
          <Card titulo={"Erro na Requisição"} informacao={erro} />
        </View>
      )}

      {showData && ( // bloco dos dados a serem exibidos
        <View>
          <View style={styles.SubContainer}>
            <Text style={styles.formTitle}>
              {data?.name} {data?.sys?.country}
            </Text>
          </View>
          <View style={styles.SubContainer}>
            <CardCeu
              codImagem={data?.weather?.[0]?.icon}
              descricao={data?.weather?.[0]?.description}
            />
            <CardTemp informacao={Math.round(data?.main?.temp) + "°C"} />
          </View>
          <View style={styles.SubContainer}>
            <Card
              titulo={"Min / Max "}
              informacao={
                Math.round(data?.main?.temp_min) +
                "°C" +
                " / " +
                Math.round(data?.main?.temp_max) +
                "°C"
              }
            />
            <Card
              titulo={"Sens. Térmica"}
              informacao={Math.round(data?.main?.feels_like) + "°C"}
            />
          </View>
          <View style={styles.SubContainer}>
            <Card
              titulo={"Umidade do ar"}
              informacao={Math.round(data?.main?.humidity) + "%"}
            />
          </View>
        </View>
      )}
    </View>
  );
}
