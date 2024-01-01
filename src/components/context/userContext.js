import React, { useContext } from "react";

export const UserContext = React.createContext({
    user: undefined,
    toggleUser: () => {},
})

export const useUserContext = () => {
    const user = useContext(UserContext);

    if(!user) {
        console.log("No user was found")
        return
    };

    return user;
}