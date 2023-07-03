import { configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Authreducer'
import ExpenseSlice from './Expensereducer';
import ThemeSlice from './Themereducer';
const Store=configureStore({reducer:{auth:AuthSlice.reducer,expense:ExpenseSlice.reducer,theme:ThemeSlice.reducer}})
export default Store;