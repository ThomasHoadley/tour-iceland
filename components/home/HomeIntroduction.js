import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3, TimelineMax } from 'gsap'

const HomeIntroduction = (props) => {
    const { beginAnimationTime } = props
    let { introText, introImage } = useRef(null)
    let timeLine = new TimelineMax()

    useEffect(() => {

        timeLine.to(introText, 1, { opacity: 1, y: 20, ease: Power3.easeOut })
            .to(introImage, 1, { opacity: 1, y: 20, ease: Power3.easeOut })

    }, []);

    return (
        <div className="introduction">
            <h1 ref={el => { introText = el }}>Welcome to Iceland</h1>
            <img ref={el => { introImage = el }} src="https://placehold.it/200x200" />

            <style jsx>{`
                .introduction {
                    background: #000;
                    height: 100vh;
                    h1, img {
                        opacity: 0;
                        transform: translateY(0);
                        color: #fff;
                        margin-top: 0px;
                    }
                }
                `}</style>
        </div >
    )
}

export default HomeIntroduction