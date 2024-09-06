import React, { Children } from "react";
import UserContext from "./Usercontext";

const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null);

        return(
            <UserContext.Provider>
            {children}

            </UserContext.Provider>
            

        )
}

export default UserContextProvider;