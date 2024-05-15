var fs = require('fs');
var countries = JSON.parse(fs.readFileSync('countries.json', 'utf8')).elements;

var worldgrid = require('./worldgrid.js').default;

const countriesCodes = {};
countries.forEach(function(country) {
    countriesCodes[country.tags["ISO3166-1"].toLowerCase()] = country.tags["name"];

    return {
        id: country.id,
        code: country.tags["ISO3166-1"],
        name: country.tags["name"],
        name_en: country.tags["name:en"],
        flag: country.flag,
    }
})

mapCountryCodeToSuperCountryCode = {
    as: 'us',
    pr: 'us',
    cw: 'nl',
    pm: 'fr',
    mq: 'fr',
    gp: 'fr',
    mf: 'fr',
    bl: 'fr',
    bq: 'nl',
    sx: 'nl',
    gf: 'fr',
    'eh;ma': 'ma',
    ax: 'fi',
    yt: 'fr',
    hm: 'au',
    um: 'us',
    nc: 'fr',
    bv: 'no',
    sj: 'no',
    gu: 'us',
    tf: 'fr',
    wf: 'fr',
    pf: 'fr',
    mp: 'us',
    re: 'fr',
    '*': '*',
}


for (let key in worldgrid.data) {
    const item = worldgrid.data[key];

    const code = item.code;
    const ok = code.split(';').every(function(cd) {
        return !!countriesCodes[cd]
    });

    if (!ok) {
        console.log('teritory', code,  mapCountryCodeToSuperCountryCode[code]);

        worldgrid.data[key].code = mapCountryCodeToSuperCountryCode[code];
        worldgrid.data[key].subcode = code;
    }
}

fs.writeFileSync('worldgrid-out.js', `export default ${JSON.stringify(worldgrid)}`);
