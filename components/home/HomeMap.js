import React, { useEffect, useRef } from 'react';
import Map from './Map'

const HomeMap = () => {
    const mapRef = useRef()
    const alert = () => alert('wat')

    useEffect(() => {
        const wat = Map(mapRef.current)


    }, [])
    return (
        <div className="map-container">

            <div className="map" ref={mapRef}></div>

            <style jsx>{`
                .map-container {
                    background: #000;
                    height: 100vh;
                    h1 {
                        margin-top: 0px;
                        color: white;
                    }
                    .map {
                        height: 100%;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default HomeMap