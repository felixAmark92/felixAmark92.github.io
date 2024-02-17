export const getGame = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}?key=1a7c4f25b60c4598b51bb50a1bfc1cd5`;
  const options = { method: "GET",};

  try {
    const response = await fetch(url, options);
    const game = await response.json();
    return game;
  } catch (error) {
    return error;
    
  }
};