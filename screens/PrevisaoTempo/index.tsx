import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { useState } from "react";
import { Card } from "../../components/Card";
import { CardCeu } from "../../components/CardCeu";
import { CardTemp } from "../../components/CardTemp";
import { Botao } from "../../components/Botao";
import { fetchWeatherData } from "../../services/OpenWeatherApi";

export default function PrevisaoTempo() {
  const [loading, setloading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  async function fetchDataHandler() {
    console.log("acionado");
    setloading(true);
    setShowData(false);
    try {
      const weatherData = await fetchWeatherData(input);
      console.log(weatherData);
      setData(weatherData);
      setShowData(true);
    } catch (e) {
      alert(e.message);
    } finally {
      setloading(false);
      setInput("");
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
