import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    musicPlaying: false,
    introComplete: false,
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

    function toggleIntroComplete(toggle) {
        dispatch({
            type: 'TOGGLE_INTRO_COMPETE',
            payload: toggle
        })
    }

    // pass the state into our global provider for use in child components
    return (
        <GlobalContext.Provider value={{
            musicPlaying: state.musicPlaying,
            toggleMusic,
            introComplete: state.introComplete,
            toggleIntroComplete
        }} >
            {children}
        </GlobalContext.Provider >
    )

}