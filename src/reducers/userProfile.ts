
import { BaseActions } from "../common/baseActions";
import { actionsEnums } from "../common/actionsEnums";

export interface UserProfileState {
    firstname : string;
}

const createDefaultUserProfileState = () : UserProfileState => ({
    firstname: 'default user',
});

export const userProfileReducer = (
    state : UserProfileState = createDefaultUserProfileState(),
    action : BaseActions) => {

    switch(action.type) {
        case actionsEnums.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action.payload);
    }
    return state;
}

const handleUserProfileAction = (state : UserProfileState, newname : string) => ({
    ...state,
    firstname: newname
})