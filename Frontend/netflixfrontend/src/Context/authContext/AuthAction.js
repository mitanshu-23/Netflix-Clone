export const loginStart = ()=>({
    type:"LOGIN START"
});

export const loginSuccess = (user)=>({
    type:"LOGIN SUCCESS",
    payload: user
});

export const loginFailure = (err)=>({
    type:"LOGIN FAILURE",
    payload: err
});

export const logout= ()=>({
    type:"LOGOUT",
});
