# next-codegrid - query country code

Modification of the [codegrid-js](http://github.com/hlaw/codegrid-js) library for use in Next.js.

- bundles all tiles as javascript chunks – both for client and server
- this process adds 10 secs to the `next build` (TODO: optimize - store in /public ?)
    - output size is 10.5 MB (see .next/static/chunks)
- first resolve takes ~40ms (both client and server), subsequent resolves are instant if it falls to the same tile
    - fetches 35kb for worldgrid, then 100-300kb for tile (or 13kb gzipped, then ~50kB for tile)

- sadly the generator is lost, so no more updates to the tiles: http://github.com/hlaw/codegrid

## Usage
```
yarn add next-codegrid
```

```typescript
import { resolveCountryCode } from 'react-codegrid';

const code = await resolveCountryCode([lon, lat]);
```

## License

- Country Code Data in the tiles directory produced from Openstreetmap (http://www.openstreetmap.org). Data under Openstreetmap are available under ODbL.

- JS code and demo: WTFPL (http://en.wikipedia.org/wiki/WTFPL)

## Github page

- http://github.com/hlaw/codegrid-js (DOCS)
- https://github.com/QuinsZouls/react-codegrid
- https://github.com/zbycz/next-codegrid

## Author

- hlaw
- QuinsZouls
