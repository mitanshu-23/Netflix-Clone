
import { createContext, useEffect, useReducer} from "react";
import authReducer from "./AuthReducer";
import {jwtDecode} from 'jwt-decode';


const INITIAL_STATE = {
    user:(JSON.parse(localStorage.getItem('user')))|| {accessToken: null},
    isFetching: false,
    error: false,
};

export const AuthContext =createContext(INITIAL_STATE);

export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer, INITIAL_STATE);
// The useReducer hook in React takes two arguments and returns an array with two values:

// Arguments:

// // Reducer Function: This function specifies how the state gets updated. It must be pure, should take the state and action as arguments, 
// and should return the next state.
// Initial State: This is the initial state value for the component.
//INITIAL STATE is stored in state and dispacth calls authReducer function

useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
},[state.user]);

useEffect(()=>{
    const decodedToken = localStorage.getItem('user').accessToken ? jwtDecode(JSON.parse(localStorage.getItem('user')).accessToken) : null;
    
    if(decodedToken) {
    if (decodedToken.exp < (Date.now() / 1000)) {
        localStorage.removeItem('user');
      }
    else
    localStorage.setItem('user',JSON.stringify(state.user))
    }
},[])



return(
    <AuthContext.Provider value={{user:state.user , isFetching: state.isFetching, error: state.error, dispatch}}>
        {children}
        </AuthContext.Provider>
)
}