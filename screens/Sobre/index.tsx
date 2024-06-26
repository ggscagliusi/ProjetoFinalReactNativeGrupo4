import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

interface CardProps {
  name: string;
  number: string;
  email: string;

  github: string;
  instagram: string;
  img: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <View style={styles.cardBox}>
      <View style={styles.divider}></View>
      <Text style={styles.name}>{props.name}</Text>
      <View style={styles.contents}>
        <View style={styles.nameHeader}>
          <View style={styles.details}>
            <Text>{props.number}</Text>
            <Text>{props.email}</Text>

            <TouchableOpacity onPress={() => Linking.openURL(props.github)}>
              <Icons name="logo-github" size={20} color={"#00000"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(props.instagram)}>
              <Icons name="logo-instagram" size={20} color={"#00000"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.img}>
          <Image source={{ uri: props.img }} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export function Sobre() {
  const contacts = [
    {
      name: "Douglas Tapajóz",
      img: "https://avatars.githubusercontent.com/u/162213811?v=4",
      number: "📞: (24) 9 9226-5269",
      email: "✉️: tapajoz.douglas@gmail.com",
      github: "https://github.com/dodo547",
      instagram: "https://www.instagram.com/douglas_sk2/",
    },

    {
      name: "Guido Scagliusi",
      img: "https://avatars.githubusercontent.com/u/162216256?v=4",
      number: "📞: (24) 9 9264-3721",
      email: "✉️: ggscagliusi@gmail.com",
      github: "https://github.com/ggscagliusi",
      instagram: "https://www.instagram.com/ggscagliusi/",
    },
    {
      name: "Jordana Araujo",
      img: "https://avatars.githubusercontent.com/u/134733441?v=4",
      number: "📞: (24) 9 8116-2654",
      email: "✉️: jordanaa_araujo@hotmail.com ",
      github: "https://github.com/jordanaaraujo",
      instagram: "https://www.instagram.com/araujojordana12/",
    },
    {
      name: "Julia Nunes",
      img: "https://avatars.githubusercontent.com/u/163067215?v=4",
      number: "📞: (24) 9 8866-7375 ",
      email: "✉️: julianunes3003@gmail.com ",
      github: "https://github.com/finalcake",
    },
    {
      name: "Lucas Voigt",
      img: "https://avatars.githubusercontent.com/u/87502643?v=4",
      number: "📞: (24) 9 8817-5064",
      email: "✉️: lucasvoigt67@gmail.com",
      github: "https://github.com/Voigtuwu",
      instagram: "https://www.instagram.com/lucasvooigt/",
    },
    {
      name: "Marcos Mattos",
      img: "https://avatars.githubusercontent.com/u/162363111?v=4",
      number: "📞: (24) 9 7835-4842",
      email: "✉️: marcosmattosnetto@hotmail.com",
      github: "https://github.com/Maretto-Mattos",
      instagram: "https://www.instagram.com/maretto_mattos/",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Sobre Nós</Text>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          number={contact.number}
          email={contact.email}
          github={contact.github}
          instagram={contact.instagram}
          img={contact.img}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#95d6ea",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#15719f",
    margin: 10,
  },
  cardBox: {
    width: "100%",
    maxWidth: 360,
    minHeight: 160,
    marginVertical: 10,
    padding: 0,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  contents: {
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    backgroundColor: "#0E76BC",
    zIndex: 0,
  },
  nameHeader: {
    zIndex: 1,
  },
  name: {
    fontSize: 24,
    margin: 10,
  },
  details: {
    marginTop: 40,
    color: "#0E76BC",
  },
  img: {
    zIndex: 1,
  },
  image: {
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});

export default Sobre;
