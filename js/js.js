// Final Version: 1.0
/* Global L -> Leaflet JS */

const Attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const map = L.map("map", {
  center: [47.577331, 9.000088],
  zoom: 7,
  minZoom: 10,
  //Wenn über diese Koordinaten hinweg, dan wird die Karte nicht zurückverschoben verschoben.
  maxBounds: [
    //Südwestlich
    [47.314953, 8.536811],
    //Nordöstlich
    [47.760957, 9.60961],
  ],
});

//Ein Layer wird hinzugefügt
L.tileLayer(tileURL, { Attribution }).addTo(map);
//Layer Nutzflächen, Transparent Ja und Nein
const nutzflaechen = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: true,
    format: "image/png",
    layers: "Nutzungsflaechen",
    crs: L.CRS.EPSG4326,
  }
);
const nutzflaechenT = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: false,
    format: "image/png",
    layers: "Nutzungsflaechen",
    crs: L.CRS.EPSG4326,
  }
);
//Layer Nutzungsflächen_Hauptkulturen_TG, Transparent Ja und Nein
const nutzungsflaechen_flaechen_tg = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: true,
    format: "image/png",
    layers: "nutzungsflaechen_flaechen_tg",
    crs: L.CRS.EPSG4326,
  }
);
const nutzungsflaechen_flaechen_tgT = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: false,
    format: "image/png",
    layers: "nutzungsflaechen_flaechen_tg",
    crs: L.CRS.EPSG4326,
  }
);
//Layer Nutzungsflächen, Transparent Ja und Nein
const nutzungsflaechen_hauptkulturen = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: true,
    format: "image/png",
    layers: "nutzungsflaechen_hauptkulturen",
    crs: L.CRS.EPSG4326,
  }
);
const nutzungsflaechen_hauptkulturenT = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: false,
    format: "image/png",
    layers: "nutzungsflaechen_hauptkulturen",
    crs: L.CRS.EPSG4326,
  }
);
//Layer nutzungsflaechen_, Transparent Ja und Nein
const nutzungsflaechen_ = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: true,
    format: "image/png",
    layers: "nutzungsflaechen_",
    crs: L.CRS.EPSG4326,
  }
);
const nutzungsflaechen_T = L.tileLayer.wms(
  "https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?",
  {
    version: "1.3.0",
    transparent: false,
    format: "image/png",
    layers: "nutzungsflaechen_",
    crs: L.CRS.EPSG4326,
  }
);
//Ein Array der Layer wird erstellt
const layers = {
  "Nutzungsflächen (Hauptkategorien Textur)": nutzflaechen,
  "Nutzungsflächen (Hauptkategorien, Transparent)": nutzflaechenT,
  "Nutzungsflächen (BFF QI Fläche TG)": nutzungsflaechen_flaechen_tg,
  "Nutzungsflächen (BFF QI Fläche TG, Transparent)":
    nutzungsflaechen_flaechen_tgT,
  "Nutzungsflächen (Hauptkategorien)": nutzungsflaechen_hauptkulturen,
  "Nutzungsflächen (Hauptkategorien, Transparent)":
    nutzungsflaechen_hauptkulturenT,
  Nutzungsflächen: nutzungsflaechen_,
  "Nutzungsflächen, Transparent": nutzungsflaechen_T,
};

//Hinzufügen eines Layer-Controller
L.control.layers(layers).addTo(map);

//Maßstabsbalken zur Karte hinzufügen
L.control
  .scale({
    metric: true,
    imperial: true,
  })
  .addTo(map)
  .addTo(map);

//Ausgewählten Layer speichern
var currentLayername;
//Legende hnzufügen
const legende = L.control({ position: "bottomright" });
map.on("baselayerchange", function (e) {
  currentLayername = e.name;
  legende.onAdd = function (map) {
    var div = L.DomUtil.create("div", "Legende");
    if (
      currentLayername.valueOf() === "Nutzungsflächen (Hauptkategorien Textur)"
    ) {
      div.innerHTML = '<img src="img/nutzflaechen.png">';
    } else if (
      currentLayername.valueOf() === "Nutzungsflächen (BFF QI Fläche TG)"
    ) {
      div.innerHTML = '<img src="img/nutzungsflaechen_flaechen_tg.png">';
    } else if (
      currentLayername.valueOf() === "Nutzungsflächen (Hauptkategorien)"
    ) {
      div.innerHTML = '<img src="img/nutzungsflaechen_hauptkulturen.png">';
    } else if (currentLayername.valueOf() === "Nutzungsflächen") {
      div.innerHTML = '<img src="img/nutzungsflaechen_.png">';
    }
    return div;
  };
  legende.addTo(map);
});
