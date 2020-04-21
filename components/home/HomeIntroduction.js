import React, { useRef, useContext, useEffect } from 'react';
import { TweenMax, Power3, TimelineLite } from 'gsap'
import { GlobalContext } from '../../context/GlobalState'

const HomeIntroduction = (props) => {
    const { toggleMusic } = useContext(GlobalContext)
    let { introText, introContainer } = useRef(null)
    let timeline = new TimelineLite()

    useEffect(() => {
        // set up timelines
        let masterTimeline = timeline;
        let introTimeLine = new TimelineLite();

        // hide container untill all is loaded.
        TweenMax.to(introContainer, 0, { css: { visibility: 'visible' } })

        // text timeline
        const introText1 = introText.children[0]
        const introText2 = introText.children[1]
        const introText3 = introText.children[2]

        // created as a function so that it can be delayed
        const introTimeLineFunction = () => {
            introTimeLine

                .staggerTo([introText1, introText2, introText3], 1.2, {
                    y: '0%',
                    ease: Power3.easeOut,
                    delay: 0.8
                }, 0.3)

                .staggerTo([introText3, introText2, introText1], 1.2, {
                    y: '-100%',
                    opacity: 0,
                    ease: Power3.easeIn
                }, 0.3)

                .to(introContainer, 3, {
                    backgroundColor: '#000',
                    ease: Power3.easeOut,
                }, ">").eventCallback('onComplete', alert)
        }

        // master timeline
        masterTimeline.add(introTimeLineFunction, "+=1");

    }, [timeline]);

    return (
        <div className="introContainer" ref={el => introContainer = el}>
            <div className="animated-text--container">
                <h1 className="animated-text--inner" ref={el => { introText = el }}><span>Welcome</span> <span>to</span> <span>Iceland.</span></h1>
            </div>

            <style jsx>{`
                .introContainer {
                    height: 100vh;
                    position: relative;
                    background: #091a2f;

                    h1 {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        color: #fff;
                        margin-top: 0px;
                        transform: translate(-50%,-50%);
                        font-family: 'Playfair Display', serif;
                        font-size: calc(4em + 0.5vw);
                        overflow: hidden;
                        display: inline-block;
                        line-height: 1;
                        span {
                            position: relative;
                            display: inline-block;
                            transform: translateY(100%);
                        }
                    }
                }
                `}</style>
        </div >
    )
}

export default HomeIntroduction