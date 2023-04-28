import { createContext , useState } from 'react'

export const MyContext = createContext()

export const MyContextProvider =  ({ children  }) => {
    const [ myState , setMyState ] = useState(true)
    const  [ secondTab , setSecond ]

    return (
        <MyContext.Provider value={{myState , setMyState}}>
            {children}
        </MyContext.Provider>
    )


}