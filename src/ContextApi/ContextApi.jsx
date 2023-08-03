import React, { createContext, useState } from 'react'

export const ContextApi = createContext()

const ContextApiProvider=({children})=>{
    const [state,setState] = useState(false)
    return <ContextApi.Provider value={{state,setState}}>
        {children}
    </ContextApi.Provider>
}

export default ContextApiProvider
