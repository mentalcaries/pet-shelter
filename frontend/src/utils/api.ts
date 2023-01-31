const BASE_URL = process.env.REACT_APP_API_URI || 'http://localhost:4000';

const checkServerResponse = (reponse: Response) => {
  return reponse.ok ? reponse.json() : console.error(`Error: ${reponse}`);
};

const getAllPets = () => {
  return fetch(`${BASE_URL}/pets`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(checkServerResponse);
};

const getPetByLocation = (location: string) => {
  return fetch(`${BASE_URL}/pets/city/${location}`).then(checkServerResponse);
};

export { getAllPets, getPetByLocation };
