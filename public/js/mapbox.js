/* eslint-disable no-var */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable import/prefer-default-export */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmVtaW5kMTk5MCIsImEiOiJjbGlhdXJ2ZTEwNmJ0M2puMW1lOG5ieHdoIn0.IHjDiTHAW40NImqgFX2aHA';
  // eslint-disable-next-line vars-on-top
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/remind1990/cliauftew037701qsbya1bt94',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 15
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
