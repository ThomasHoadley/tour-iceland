import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import HomeIntroduction from './HomeIntroduction'

const HomeContainer = () => {
    const { musicPlaying, introComplete } = useContext(GlobalContext)
    const music = useRef('music')

    useEffect(() => {
        // play music on the homepage.
        if (musicPlaying == true) {
            music.current.play()
            // return
        } else {
            // return
            music.current.pause()
        }

    });

    return (
        <div className="homePage">
            {!introComplete
                ? <HomeIntroduction />
                : <h1>The map</h1>
            }

            <audio ref={music}>
                <source src="glacier-chris-haugen.mp3" type="audio/mpeg" />
            </audio>

        </div>
    )
}

export default HomeContainer

// Homepage Container

// Helpful links
// http://reactcommunity.org/react-transition-group/transition