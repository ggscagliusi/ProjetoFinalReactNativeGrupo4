import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

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

            <TouchableOpacity onPress={() => Linking.openURL(props.github)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" >
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(props.instagram)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.img}>
          <Image source={{ uri: props.img }} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

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
      number: "📞: (24)9 9264-3721",
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
      <Text style={styles.heading}>SOBRE NÓS</Text>
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
    backgroundColor: "#25AAE1",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 20,
  },
  cardBox: {
    width: '100%',
    maxWidth: 360,
    minHeight: 160,
    marginVertical: 10,
    padding: 0,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  contents: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    backgroundColor: '#0E76BC',
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
    color: '#0E76BC',
  },
  img: {
    zIndex: 1,
  },
  image: {
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});

export default Sobre;
