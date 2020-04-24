import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

function catchAbortError(error) {
    if (error.name != "AbortError") {
        console.error(error);
    }
}

// First... Black overlay fades out.
// Then the map shows...
// then it animates in to iceland...
// Then some text appears... Keep scrolling...
// Clouds cover the screen!

const HomeMap = () => {
    const mapRef = useRef();

    useEffect(
        () => {
            loadModules(['esri/Map', 'esri/views/SceneView'], { css: true })
                .then(([ArcGISMap, SceneView]) => {
                    const map = new ArcGISMap({
                        basemap: 'satellite'
                    });

                    // load the map view at the ref's DOM node
                    const view = new SceneView({
                        container: mapRef.current,
                        map: map,
                        camera: {
                            position: {
                                latitude: 6.19913656856317,
                                longitude: -50.26085916603604,
                                z: 11000000
                            },
                            fov: 40,
                            tilt: 23.43820419124214,
                            heading: 359.3117104854654
                        }
                    });

                    view.ui.empty("top-left");

                    console.log(view.ready);
                    // view
                    //     .goTo(
                    //         {
                    //             position: {
                    //                 x: -1985616.9086438562,
                    //                 y: 9397102.413321003,
                    //                 z: 3008225.754174225,
                    //                 spatialReference: {
                    //                     wkid: 102100
                    //                 }
                    //             },
                    //             heading: 359.99826462803696,
                    //             tilt: 1.06239122318838
                    //         },
                    //         {
                    //             duration: 50000,
                    //             easing: 'ease-in',
                    //             speedFactor: '1.2'
                    //         }
                    //     )
                    //     .catch(catchAbortError);

                    return () => {
                        if (view) {
                            // destroy the map view
                            view.container = null;
                        }
                    };
                });
        }
    )
    return (
        <div className="map-container">

            <div ref={mapRef} className="map"></div>

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