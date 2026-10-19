import { BuscarFilmes } from "../../api/get-filmes";
import { useQuery } from "@tanstack/react-query";
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Catalogo() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["filmes"],
    queryFn: BuscarFilmes,
  });

  if (isLoading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator />
        <Text>Carregando catálogo...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centro}>
        <Text>Erro ao carregar catálogo.</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoTexto}>SENAIFLIX</Text>
      </View>

      <View style={styles.headerTitulo}>
        <Text style={styles.tituloSecao}>Catálogo</Text>
      </View>

      <FlatList
        data={data}
        contentContainerStyle={styles.listaFilmes}
        ItemSeparatorComponent={() => <View style={styles.linha} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardFilme}
            onPress={() => router.push({
                pathname: "/catalogo/[id]",
                params: { id: String(item.id) },
              })
            }>
            <Image 
              source={{ uri:`${item.poster}`}} 
              style={styles.capa} 
            />

            <View style={styles.info}>
              <Text style={styles.nomeFilme}>{item.nome}</Text>
              
              <Text style={styles.detalhes}>
                {item.ano} . {item.duracao}
              </Text>
              <Text style={styles.genero}>{item.genero}</Text>

            </View>

            <Text style={styles.seta}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eeee"
  },
  centro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#1f1e1e80",
  },
  logoTexto: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#D92525",
  },
  headerTitulo: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#a5a3a3a1",
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  listaFilmes: {
    paddingBottom: 20
  },
  cardFilme: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  capa: {
    width: 85,
    height: 112,
    backgroundColor: "#E0E0E0",
    borderWidth: 2,
    borderColor: "#999",
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
    gap: 4,
  },
  nomeFilme: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4
  },
  detalhes: {
    fontSize: 14,
    color: "#636161",
  },
   linha: {
    height: 1,
    backgroundColor: "#a5a3a3a1",
  },
  seta: {
    fontSize: 35,
    color: "#222",
    marginLeft: 8,
  },
  genero: {
    marginHorizontal: 18,
    marginVertical: 11,
    fontSize: 13
  },
});