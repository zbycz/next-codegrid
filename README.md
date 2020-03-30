# react-codegrid - Javascript function to query country code

`react-codegrid` is a simple javascript library for efficiently retrieving country code from lat-lng coordinates of a point. The data is encoded in a set of compressed utf-grid json files.


## Features

- No application server needed (other than static web serving for browser use). No dependencies on external geocoding services.

- Compact data size - under present configuration, country code is resolved at grain level of zoom 17 tiles (several hundred meters). JSON files covering the planet take up 13M, and <1.3M after compression by gzip.

- JS code has no external dependencies for browser use (native JSON assumed).

- Flexibility - sub-country divisions can be incorporated by custom geojson files.


## Usage

### Node.js use

```
npm install git://github.com/QuinsZouls/react-codegrid.git
```

In Javascript:

```js
const codegrid = require('react-codegrid');
```

## Data structure

Concept -

- Similar to UTF Grid : https://github.com/mapbox/utfgrid-spec (Note: The json files used are grouped and compressed, and do not meet the specifications)

Under the present schema -

- At the top level, the world is coded into a 512\*512 utf-grid, providing a resolution at zoom level 9 (z9) tiles.

- _When and only when_ there is ambiguity (2 or more countries in the same z9 tile), the next level grid (resolution at z13) is generated.

- Similarly, a further level at zoom level 17 is generated. Tiles with ambiguity are set to the country at the center point.

- To save space, in case one country takes up only part of a tile, and the rest of it is open sea, the entire tile is set to the country.

- A number of tiles contain highly repetitive data (same country in a grid row, or repeating patterns). While gzip could save much of the network bandwidth during transit, tiles without compression would still take up much memory when loaded. The utf grids are therefore compressed in JSON representation, cutting down roughly 80% in size.

- utf-grid tile data derived from Openstreetmap data with some manual fixes, separately using a set of Python scripts - http://github.com/hlaw/codegrid

## License

- Country Code Data in the tiles directory produced from Openstreetmap (http://www.openstreetmap.org). Data under Openstreetmap are available under ODbL.

- JS code and demo: WTFPL (http://en.wikipedia.org/wiki/WTFPL)

## Github page

- http://github.com/hlaw/codegrid-js
- https://github.com/QuinsZouls/react-codegrid

## Author

- hlaw
- QuinsZouls
