import { combineReducers } from 'redux'
import Auth from './Auth'
import Users from './Users'
import Transfer from './Transfer'
import { UserDelete, UserEdit } from './Users'
import Update from './Update';

const reducers = combineReducers({
    Auth,
    Users,
    UserDelete,
    UserEdit,
    Transfer,
    Update,
})

export default reducers