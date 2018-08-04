import { UserAction, UserActionTypes } from "../actions/userAction";
import { IUserState } from "../states/IUserState";

const initialState: IUserState = {
    isLoggedIn: false,
    userName: ''
}

export function reduceUserState(state: IUserState = initialState, action: UserAction): IUserState {
  switch (action.type) {
    case UserActionTypes.CREATE_ACCOUNT:
      return { ...state, isLoggedIn: true, userName : action.userName };
    default:
      return state;
  }
}