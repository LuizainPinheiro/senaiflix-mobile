const API_URL = "http://10.92.201.130:3000/filmes"; 

export async function BuscarFilmes() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar a lista de filmes");
  }

  return response.json();
}