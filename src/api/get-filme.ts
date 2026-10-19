const API_URL = "http://10.92.201.130:3000/filmes"; 

export async function BuscarFilmePorId(id: string) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os detalhes do filme");
  }

  return response.json();
}