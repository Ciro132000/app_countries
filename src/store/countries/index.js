import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const Countries = {
    
    namespaced: true,

    state,
        
    getters,
        
    mutations,
        
    actions        
        
    
}

export default Countries;