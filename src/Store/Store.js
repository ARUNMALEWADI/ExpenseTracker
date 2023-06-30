import { configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Authreducer'
import ExpenseSlice from './Expensereducer';
const Store=configureStore({reducer:{auth:AuthSlice.reducer,expense:ExpenseSlice.reducer}})
export default Store;