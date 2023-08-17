export const SET_COUNTRIES = (state, countries) =>{

    state.countries = countries;
}

export const SET_COUNTRIES_FILTER = (state, countries) => {
    state.countriesFilter = countries
}

export const REMOVE_FILTER = (state) => {
    state.countriesFilter = []
}