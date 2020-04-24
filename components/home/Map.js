import { loadModules } from 'esri-loader';

function newMap(element) {
    return loadModules(['esri/Map', 'esri/views/SceneView'], { css: true })
        .then(([ArcGISMap, SceneView]) => {
            const map = new ArcGISMap({
                basemap: 'satellite',
                ground: "world-elevation"

            });

            // load the map view at the ref's DOM node
            const view = new SceneView({
                container: element,
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
            return view.when(() => {

                view.on('mouse-wheel', function (evt) {
                    // prevents zooming with the mouse-wheel event
                    evt.preventDefault();
                });
                view.on('drag', function (evt) {
                    // prevents zooming with the mouse-wheel event
                    evt.preventDefault();
                });

                view.on('click', function (evt) {
                    // prevents zooming with the mouse-wheel event
                    evt.preventDefault();
                });

                view.ui.empty("top-left");
                view
                    .goTo(
                        {
                            position: {
                                x: -21.931498,
                                y: 64.146876,
                                z: 100000,
                                spatialReference: {
                                    wkid: 4326
                                }
                            },
                            heading: 0,
                            tilt: 0
                        },
                        {
                            duration: 30000,
                            maxDuration: 30000, // Make sure to set maxDuration if the duration is bigger than 8000 ms                                
                            easing: 'ease-in'
                        }
                    )
                if (!view || !view.ready) {
                    return view;
                }
            })

        });
}
export default newMap;