import { CLEAR_ERROR, CLEAR_REPOS, GET_REPO_FAILURE, GET_REPO_REQUEST, GET_REPO_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, TOGGLE_DARK_MODE } from "./actionTypes"

const initialState = {
    loading : false,
    userInfo : {},
    error : false,
    errorMessage : '',
    darkMode : false,
    repos : []
}

const GetUserRequest = (state = initialState, action) => {
    return {
        ...state,
        loading : true
    }
}

const GetUserSuccess = (state = initialState, action) => {
    return {
        ...state,
        loading : false,
        userInfo : action.data
    }
}

const GetUserFailure = (state = initialState, action) => {
    return {
        ...state,
        loading : false,
        error : true,
        errorMessage : action.errorMessage
    }
}

const ClearError = (state = initialState, action) => {
    return {
        ...state,
        error : false,
        errorMessage : ''
    }
}

const ToggleDarkMode = (state = initialState, action) => {
    return {
        ...state,
        darkMode : !state.darkMode
    }
}

const GetUserRepos = (state = initialState, action) => {
    return {
        ...state,
        loading : true
    }
}

const GetUserReposSuccess = (state = initialState, action) => {
    return {
        ...state,
        repos : [...state.repos, ...action.repos],
        loading : false
    }
}

const GetUserReposFailure = (state = initialState, action) => {
    return {
        ...state,
        error : true,
        errorMessage : action.errorMessage,
        loading : false
    }
}

const ClearRepos = (state = initialState, action) => {
    return {
        ...state,
        repos : []
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST : return GetUserRequest(state, action);
        case GET_USER_SUCCESS : return GetUserSuccess(state, action);
        case GET_USER_FAILURE : return GetUserFailure(state, action);
        case GET_REPO_REQUEST : return GetUserRepos(state, action);
        case GET_REPO_SUCCESS : return GetUserReposSuccess(state, action);
        case GET_REPO_FAILURE : return GetUserReposFailure(state, action);
        case CLEAR_ERROR : return ClearError(state, action);
        case CLEAR_REPOS : return ClearRepos(state, action);
        case TOGGLE_DARK_MODE : return ToggleDarkMode(state, action);
        default : return state
    }
}

export default rootReducer;