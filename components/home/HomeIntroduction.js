import React, { useRef, useContext, useEffect } from 'react';
import { TweenMax, Power3, TimelineMax } from 'gsap'
import { GlobalContext } from '../../context/GlobalState'

const HomeIntroduction = () => {
    let { introText, introContainer, subText, overlay } = useRef(null)
    let timeline = new TimelineMax()
    const { toggleIntroComplete } = useContext(GlobalContext)

    const handleAnimations = () => {
        let masterTimeline = timeline;

        TweenMax.to(introContainer, 0, { css: { visibility: 'visible' } })

        // set up timeline variables
        let introText1 = introText.children[0]
        let introText2 = introText.children[1]
        let introText3 = introText.children[2]
        let subText1 = subText.children[0]
        let subText2 = subText.children[1]

        // create timeline functions

        const introTextTimeline = () => {
            let timeline = new TimelineMax();

            timeline.staggerTo([introText1, introText2, introText3], 1.2, {
                y: '0%',
                ease: Power3.easeOut,
                delay: 0
            }, 0.3)
            return timeline
        }

        const subTextAnimation = () => {
            let timeline = new TimelineMax();

            timeline.to(subText1, 1, {
                y: '0px',
                ease: Power3.easeOut
            }).to(subText1, 1, {
                y: '-18px',
                ease: Power3.easeOut
            }, "+=0.5").to(subText2, 1, {
                y: '0px',
                ease: Power3.easeOut
            }, "-=1")
            return timeline
        }

        // create the timeline
        masterTimeline.add(introTextTimeline(), "+=1");
        masterTimeline.add(subTextAnimation());

        return masterTimeline
    }

    const handleToggleComplete = () => {
        toggleIntroComplete(true)
    }

    // when the component mounts
    useEffect(() => {
        // first thing it runs the animations
        let masterTimeline = handleAnimations();

        // once the animation is handled you need to get out of this function and go to the next one...
        masterTimeline.eventCallback("onComplete", function () {
            document.addEventListener('click', function () {
                let timeline = new TimelineMax();

                timeline
                    .to(overlay, 1.5, {
                        autoAlpha: 1,
                        ease: Power3.easeOut
                    }).eventCallback('onComplete', function () {
                        handleToggleComplete(true)
                    })
            })
        })

    }, [timeline]);

    return (
        <div className="intro" ref={el => introContainer = el}>
            <div className="overlay" ref={el => overlay = el}></div>

            <div className="intro__content">

                <h1 className="appearing-text"
                    ref={el => { introText = el }}>
                    <span>Welcome</span> <span>to</span> <span>Iceland.</span>
                </h1>

                <p className="rolling-text"
                    ref={el => { subText = el }}>
                    <span>Please ensure you have sound</span>
                    <span>Click to start your journey</span>
                </p>

            </div>

            <style jsx>{`
                .intro {
                    height: 100vh;
                    position: relative;
                    background: #091a2f;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    .overlay {
                        opacity: 0;
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        background: #000;
                        z-index: 100;
                    }
                    
                    h1 {
                        font-family: 'Playfair Display', serif;
                        margin-top: 0px;
                        font-size: calc(3em + 1vw);
                        margin-bottom: 0px;
                        opacity: 1;
                        letter-spacing: 0.02em;
                    }
                    p {
                        font-family: 'Open sans';
                        font-weight: 300;
                        font-size: 15px;
                        opacity: 0.8;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                    }
                    .appearing-text {
                        color: #fff;
                        overflow: hidden;
                        line-height: 1;
                        span {
                            position: relative;
                            display: inline-block;
                            transform: translateY(100%);
                        }
                    }
                    .rolling-text {
                        color: #fff;
                        overflow: hidden;
                        position: relative;
                        line-height: 1;
                        display: block;
                        text-align: right;
                        height: 18px;
                        margin-top: 30px;
                        text-align: center;
                        span {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            left: 50%;
                            transform: translateY(18px) translateX(-50%);
                        }
                    }
                }
                `}</style>
        </div >
    )


}

export default HomeIntroduction

// Helpers 
// https://www.youtube.com/watch?time_continue=55&v=ZbTI85lmu9Q&feature=emb_logo