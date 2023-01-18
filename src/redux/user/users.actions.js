import { userActionType } from "./user.type";
export const setCurrentUser = user => ({
  type: userActionType["SET-CURRENT-USER"],
  payload: user
});
