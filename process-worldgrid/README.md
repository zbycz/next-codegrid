// areas contain all sort of closed ways and relation, but they are delayed several hours
// id starts with 3600... for relation and 2400... for ways

// countries.json
[out:json][timeout:25];
area[admin_level=2]["ISO3166-1"]["name"];
out tags qt;



// doesnt work for "CZ".. why?
{{geocodeArea:"GB"}}->.searchArea;
  nwr["climbing"](searchArea);

// works fine:
nwr[sport=climbing](area: 3600051684);

// or better
( area["ISO3166-1"="CZ"][admin_level=2]; )->.a;
nwr[sport=climbing](area.a);








// example: search the area of the Dolmites
area  [place=region]  ["region:type"="mountain_area"]  ["name:en"="Dolomites"];
out body;
node[natural=peak](area);
out body qt;

