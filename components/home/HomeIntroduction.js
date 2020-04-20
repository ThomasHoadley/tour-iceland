import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

const HomeIntroduction = (props) => {
    const [inProp, setInProp] = useState(false);
    const { beginAnimationTime } = props

    useEffect(() => {
        setTimeout(() => {
            setInProp(true)
        }, beginAnimationTime)
    });

    return (
        <div className="introduction">
            <Transition
                in={inProp}
                appear={true}
                timeout={10000}
                classNames="textAnimation"
                addEndListener={(node, done) => {
                    // node.addEventListener('transitionend', done, false);
                    console.log('The text component has finished animating')
                }}>
                {state => (
                    <h1 className={`textAnimation textAnimation-${state}`}>
                        Welcome to Iceland
                    </h1>
                )}
            </Transition>

            <style jsx>{`
                    .introduction {
                        background: #000;
                        height: 100vh;
                        h1 {
                            color: #fff;
                            margin-top: 0px;
                        }
                    }
                    .textAnimation {
                        &-exited {
                            opacity: 0;
                            transition: opacity 300ms linear;
                        }
                        &-entering {
                            opacity: 1;
                            transition: opacity 300ms linear;
                        }
                    }
                `}</style>
        </div>
    )
}

export default HomeIntroduction