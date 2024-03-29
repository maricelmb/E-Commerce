import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

//actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});


export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  // const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // console.log('input-->' + currentUser);

  // const setCurrentUser = (user) => {
  //   dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  // };

  // const value = { currentUser, setCurrentUser };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
