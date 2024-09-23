import{
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_RESET,
} from '../Constants/Userconstants.js'

export const UserregisterReducer = (state = {user:{}}, action) => {
    switch(action.type){
        case REGISTER_USER_REQUEST:
            case LOGIN_REQUEST:
                case LOAD_USER_REQUEST:
            return{
                loading: true,
                isAuthenticated:false,
            }

            case REGISTER_USER_SUCCESS:
                case LOGIN_SUCCESS:
                case LOAD_USER_SUCCESS:
                return{
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload,
                }

                case REGISTER_USER_FAIL:
                case LOGIN_FAIL:
                case LOAD_USER_FAIL:
                    return{
                        loading:false,
                        isAuthenticated:false,
                        error:action.payload
                    }


                    case LOGOUT_SUCCESS:
                        return{
                            loading:false,
                            user:null,
                            isAuthenticated:false,
                        }


                    case LOGOUT_FAIL:
                        return{
                            ...state,
                            loading:false,
                            error:action.payload,
                        }    

                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:null,
                        }

                        default:
                            return state;
    }

}

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case UPDATE_PASSWORD_FAIL:
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UPDATE_PASSWORD_RESET:
        case UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false
            }
            default:
              return state;
      }
  }