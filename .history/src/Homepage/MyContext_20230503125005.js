import { createContext , useState } from 'react'

export const MyContext = createContext()

export const MyContextProvider =  ({ children  }) => {
    const [ myState , setMyState ] = useState(true)
    const  [ secondTab , setSecondState  ] = useState(true)
    const [ darkTheme , setDarkTheme ] = useState(false)
    const [ historicalData , setHistoricalData ] = useState([])

    return (
        <MyContext.Provider value={{myState , setMyState , secondTab , setSecondState , darkTheme , setDarkTheme} }>
            {children}
        </MyContext.Provider>
    )


}