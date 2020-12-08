 export const environment = {
  production: false,
};
const SUPERHERO_URL_API: string = 'https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/'
//{ [key: string]: { [key: string]: string | { [key: string]: string } } } 
export const SUPERHERO= {
  CONFIGURATION: {
    TITLE: 'DEV - ECON',
    LIST: {
      TITLE: 'SUPERHEROES'
    }
  },
  RESOURCE: {
    LIST: `${SUPERHERO_URL_API}all.json`,
    ID: `${SUPERHERO_URL_API}id/`,
  }
};