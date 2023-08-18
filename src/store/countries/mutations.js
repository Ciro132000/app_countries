export const SET_COUNTRIES = (state, countries) =>{

    state.countries = countries;
}

export const SET_COUNTRIES_FILTER = (state, countries) => {
    state.countriesFilter = countries
}

export const REMOVE_FILTER = (state) => {
    state.countriesFilter = []
}

export const SET_DETAILS_COUNTRY = (state, details) => {
    state.detailsCountry = details
    state.isShowDetails = true
}


export const HIDE_DETAILS = (state) => {
    state.detailsCountry = null
    state.isShowDetails = false
}



// Nuevo
export const ALL_COUNTRIES_CODE = (state, countries) => {
    const skip = state.pagination.skip
    const pagination = countries.length/skip
    state.pagination.total = pagination
    state.totalCountries = countries
}