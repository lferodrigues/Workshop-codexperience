export async function listCats() {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  if (response.ok) {
    return response.json();
  }
  const error = await response.json();
  throw error;
}

export async function listDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  if (response.ok) {
    return response.json();
  }
  const error = await response.json();
  throw error;
}
