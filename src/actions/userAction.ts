
/**
 * Actions are payloads of information that send data from your application to your store.
 */

export enum UserActionTypes {
    CREATE_ACCOUNT = 'userActionCreateAccount'
}

export interface ICreateAccountAction {
    type: UserActionTypes.CREATE_ACCOUNT;
    userName: string
}

export type UserAction = ICreateAccountAction;

export function createCreateAccountAction( userName: string ): ICreateAccountAction {
    return {
        type: UserActionTypes.CREATE_ACCOUNT,
        userName: userName
    };
}

