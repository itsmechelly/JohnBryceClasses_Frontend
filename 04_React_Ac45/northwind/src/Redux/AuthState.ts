import UserModel from "../Models/UserModel";

//Auth state:
export class AuthState {
    public user: UserModel = null;
}

// -------------------------------------------------------------------------------------------

//Auth action types:
export enum AuthActionType {

    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// -------------------------------------------------------------------------------------------

//Auth Action:
export interface AuthAction {
    type: AuthActionType;
    payload?: any; //Here the ? is for the Logout!
}

// -------------------------------------------------------------------------------------------

//Auth Action Creators:
export function registerAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Register, payload: user };
}

export function loginAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Login, payload: user };
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}

// -------------------------------------------------------------------------------------------

//Auth Reducer:
export function authReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {

    const newState = {...currentState};

    switch(action.type) {
        case AuthActionType.Register: //Here the payload is the register user sent from the server.
        case AuthActionType.Login: //Here the payload is the logged in user sent from the server.
            newState.user = action.payload;
            break;
        case AuthActionType.Logout: //Here we dont have payload!
            newState.user = null;
            break;
    }

    return newState;
}