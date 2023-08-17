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