export async function getSimpsonsApi() {
  try {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getQuotesByCharacter(searchText: string) {
  try {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
