import { actionsEnums } from '../common/actionsEnums';
import { BaseActions } from "../common/baseActions";

export const updateUserProfileName = (newName : string) : BaseActions => ({
    type: actionsEnums.UPDATE_USERPROFILE_NAME,
    payload: newName
});