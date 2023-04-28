import { createContext , useState } from 'react'

export const MyContext = createContext()

export const MyContextProvider =  ({ children  }) => {
    const [ myState , setMyState ] = useState(true)
    const  [ secondTab , setSecondState  ] = useState(true)
    const [ darkTheme , setDarkTheme ] = useSta

    return (
        <MyContext.Provider value={{myState , setMyState , secondTab , setSecondState} }>
            {children}
        </MyContext.Provider>
    )


}