import { createContext,useContext } from "react";


export const ThemeContext=createContext({ 
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
}); //jb context pehli baar bane toh kya kya value usmeh feed ho


export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}