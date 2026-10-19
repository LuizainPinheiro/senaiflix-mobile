export async function BuscarFilmePorId(id: string) {
  const response = await fetch(`http://localhost:3000/filmes/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os detalhes do filme");
  }

  return response.json();
}