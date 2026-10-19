import { Text, View, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { BuscarFilmePorId } from "../../api/get-filme";

export default function DetalhesFilme() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["filme", id],
    queryFn: () => BuscarFilmePorId(id),
  });

  if (isLoading) {
    return (
      <View style={styles.carregamento}>
        <ActivityIndicator />
        <Text>Carregando filmes...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.carregamento}>
        <Text>Erro ao carregar o filme.</Text>
      </View>
    );
  }

  return (
   <ScrollView style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: data.capa }}
      />

      <View style={styles.secao}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <View style={styles.filmeDetalhes}>
          <Text style={styles.detalhes}>{data.ano}</Text>
          <Text>·</Text>
          <Text style={styles.detalhes}>{data.duracao}</Text>
  
          {data.classificacao && (
            <View style={styles.detalhesIdade}>
              <Text style={styles.idadeNumero}>{data.classificacao}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.btnAssistir}>
          <Text style={styles.btnTexto}>Assistir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLista}>
          <Text style={styles.listaTexto}>Minha lista</Text>
        </TouchableOpacity>

        <View style={styles.sinopseContainer}>
          <Text style={styles.sinopseTitulo}>SINOPSE</Text>
          <Text style={styles.sinopseTexto}>{data.sinopse}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoDetalhes}>
            <Text style={styles.infoGenero}>Gênero</Text>
            <Text style={styles.info}>{data.genero}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eeee"
  },
  carregamento: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    minHeight: 230,
  },
  secao: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 35,
    gap: 10,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },
  filmeDetalhes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  detalhes: {
    fontSize: 16,
    color: "#4e4e4e",
  },
  detalhesIdade: {
    borderWidth: 1,
    borderColor: "#FF2414",
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginLeft: 2,
  },
  idadeNumero: {
    color: "#FF2414",
    fontSize: 14,
  },
  btnAssistir: {
    height: 61,
    backgroundColor: "#FF2817",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  btnTexto: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnLista: {
    height: 61,
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginBottom: 6,
  },
  listaTexto:{
    color: "#111",
    fontSize: 19,
    fontWeight: "bold",
  },
  sinopseContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#AAA",
    paddingVertical: 14,
    gap: 10,
  },
  sinopseTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    textTransform: "uppercase",
  },
  sinopseTexto: {
    fontSize: 17,
    lineHeight: 27,
    color: "#111",
  },
  infoContainer: {
    paddingTop: 5,
    gap: 17,
  },
  infoDetalhes: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoGenero: {
    width: 130,
    fontSize: 16,
    color: "#555",
  },
  info: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },
});
