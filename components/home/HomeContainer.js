import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import HomeIntroduction from './HomeIntroduction'
import HomeMap from './HomeMap'

const HomeContainer = () => {
    const { introComplete } = useContext(GlobalContext)
    const music = useRef('music')

    useEffect(() => {
        if (introComplete) {
            // music.current.play()
            return;
        }
    });

    return (
        <div className="homePage">
            {!introComplete ? <HomeIntroduction /> : <HomeMap />}

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