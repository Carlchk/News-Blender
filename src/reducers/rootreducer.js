import { combineReducers } from 'redux'
import reducers from '../reducers/index'

const rootReducer = combineReducers({
  articles: reducers
})

export default rootReducer
