import axios from 'axios';
import gql from 'graphql-tag';
import { createProvider } from '../../vue-apollo';


// Obtener todos los paises de la API
export const actionGetCountries = async ({commit}) => {
    try {
        const apolloClient = createProvider().defaultClient;
        const response = await apolloClient.query({
            query: gql`
            query{
                countries{
                    code
                    name
                    emoji
                    emojiU
                    continent{
                    name
                    }
                }
            }
            `
          });

        const countries = response.data.countries;

        for (const country of countries) {
            const image = await loadingImage(country.name);
            country.img = image;
        }

        commit('SET_COUNTRIES', countries);
    } catch (error) {
        console.error(error);
    }
}

// Filtrar los paises por continentes usando la API
export const actionGetCountriesContinent = async ({commit}, code) => {
    try {
        const apolloClient = createProvider().defaultClient;
        const response = await apolloClient.query({
            query: gql`
            query{
                countries(filter:{ continent: {eq: "${code}"}}){
                    code
                 name
                emoji
                 continent{
                 name
                }
                }
            }
            `
          });

        const countries = response.data.countries;

        for (const country of countries) {
            const image = await loadingImage(country.name);
            country.img = image;
        }
        
    
          commit('SET_COUNTRIES_FILTER', countries);
    } catch (error) {
        console.error(error);
    }
}

// Realizar la busqueda de los paises por coincidencia
export const searchContry = async ({commit}, countries) => {
    commit('SET_COUNTRIES_FILTER', countries)
}



// Eliminar el filtro y busqueda
export const removeFilter = async ({commit}) => {
    commit('REMOVE_FILTER')
}

// Eliminar detalles
export const removeDetails = async ({commit}) => {
    commit('HIDE_DETAILS')
}

// Mostrar detalles del país
export const getDetailsCountry = async ({commit}, data) => {
    try {
        const apolloClient = createProvider().defaultClient;
        const response = await apolloClient.query({
            query: gql`
            query{
                country(code: "${data.code}"){
                    capital
                    native
                    phone
                    currency
                    subdivisions{
                    name
                    }
                    awsRegion
                    languages{
                    name
                    native
                    }
                    states{
                    name
                    }
                    
                }
            }
            `
          });

          const details = {...data, ...response.data.country}

          commit('SET_DETAILS_COUNTRY', details);
    } catch (error) {
        console.error(error);
    }
}


// Buscar imagenes de los paises
const loadingImage = async (name) => {
    try {
        const res = await axios.get( `?key=${process.env.VUE_APP_PIXABAY_API_KEY}&image_type=photo&q=${name}`);
        

        if(res.data.total == 0){
            return 'https://www.idento.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png'
        }else{
            return res.data.hits[0].webformatURL
        }
    } catch (error) {
        console.error(error);
    }
}
