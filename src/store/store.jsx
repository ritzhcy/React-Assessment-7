import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./Studentdata";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})