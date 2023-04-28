import { createContext , useState } from 'react'

export const MyContext = createContext()

export const MyContextProvider =  ({ children  }) => {
    const [ myState , setMyState ] = useState(false)

    return (
        <MyContext.Provider value={{myState , setMyS}}
    )


}