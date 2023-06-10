import { configureStore } from '@reduxjs/toolkit'
import clientsSLice from './campaignSlice'

const store = configureStore({ reducer: { clients: clientsSLice } })
export default store
