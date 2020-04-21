import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    musicPlaying: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions. These call the reducer
    function toggleMusic(toggle) {
        dispatch({
            type: 'TOGGLE_MUSIC',
            payload: toggle
        })
    }

    // pass the state into our global provider for use in child components
    return (
        <GlobalContext.Provider value={{
            musicPlaying: state.musicPlaying,
            toggleMusic
        }} >
            {children}
        </GlobalContext.Provider >
    )

}