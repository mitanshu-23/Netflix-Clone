const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: {acessToken:null},
        isFetching: true,
        error: false,
      };

    case "LOGIN SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN FAILURE":
      return {
        user: {acessToken:null},
        isFetching: false,
        error: true,
      };

      case "LOGOUT":
      return {
        user: {acessToken:null},
        isFetching: false,
        error: false,
      };

    default:
        return{
            ...state
        }
  }
};

export default authReducer;