import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import HomeIntroduction from './HomeIntroduction'

const HomeContainer = () => {
    const { musicPlaying } = useContext(GlobalContext)
    const music = useRef('music')
    const beginAnimationTime = 3000

    useEffect(() => {
        setTimeout(() => {
            if (musicPlaying == true) {
                // music.current.play()
                music.current.pause()
            } else {
                music.current.pause()
            }
        }, beginAnimationTime)

    });

    return (
        <div className="homePage">

            <HomeIntroduction beginAnimationTime={beginAnimationTime} />

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