import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; 

export default function Index() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
  
      <Image
        style={styles.imgPrincipal}
        source={{
          uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg97mjSqN7Zombl2vv-EcLKMpjzZ2QWWhRMrLzvBofqXkEHtfFJwJZtIddhfVEaZkoVgZHjs_v1O_1ZejdkNLFKY4RLP1Iz47zrD5avnB5jKkmRSbfraRNJ05dMIYDCQ3hzsMq5plo6-bI1/s1600/atualizacao-2017-03-31.jpg",
        }}
      />
      <View>
        <Text style={styles.titulo}>SENAIFLIX</Text>
        <Text style={styles.descricao}>
          Filmes e séries ilimitados. Assista onde quiser.
        </Text>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => router.push("/catalogo")}>
          <Text style={styles.btnTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eeee",
    margin: 10
  },
  imgPrincipal: {
    width: "100%",
    height: "70%",
  },
  titulo: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 17,
  },
  descricao: {
    fontSize: 16,
    color: "#535252",
    marginBottom: 17,
  },
  btnEntrar: {
    backgroundColor: "red",
    padding: 15,
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});