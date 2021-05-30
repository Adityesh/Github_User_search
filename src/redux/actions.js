import { CLEAR_ERROR, CLEAR_REPOS, GET_REPO_FAILURE, GET_REPO_REQUEST, GET_REPO_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, TOGGLE_DARK_MODE } from "./actionTypes";

export function GetUser(username) {
    return {
        type : GET_USER_REQUEST,
        username
    }
}

export function GetUserSuccess(data) {
    return {
        type : GET_USER_SUCCESS,
        data
    }
}

export function GetUserFailure(err) {
    return {
        type : GET_USER_FAILURE,
        errorMessage : err
    }
}

export function ClearError() {
    return {
        type : CLEAR_ERROR
    }
}

export function ToggleDarkMode() {
    return {
        type : TOGGLE_DARK_MODE
    }
}

export function GetUserRepos(username, page) {
    return {
        type : GET_REPO_REQUEST,
        username,
        page
    }
}

export function GetUserReposSuccess(repos) {
    return {
        type : GET_REPO_SUCCESS,
        repos
    }
}

export function ClearRepos() {
    return {
        type : CLEAR_REPOS
    }
}

export function GetUserReposFailure(err) {
    return {
        type : GET_REPO_FAILURE,
        errorMessage : err
    }
}