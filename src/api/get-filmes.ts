export async function BuscarFilmes() {
  const response = await fetch("http://localhost:3000/filmes");

  if (!response.ok) {
    throw new Error("Erro ao buscar a lista de filmes");
  }

  return response.json();
}